import { spawn } from "child_process";
import esbuild from "esbuild";
import glob from "glob";
import http from "http";
import * as a from "@htmlplus/compiler";

console.log(123, a);

const config = {
  dev: true,
  port: 3000,
  prefix: "plus",
  // cache: '.cache',
  include: "./src/**/aspect-ratio.tsx",
  scss: {
    includePaths: ["./src/styles"],
  },
};

const clients = [],
  time = Date.now();

esbuild
  .build({
    bundle: true,
    sourcemap: true,
    format: "esm",
    // TODO
    outfile: "public/build/bundle.js",
    stdin: {
      resolveDir: ".",
      contents: glob
        .sync(config.include)
        .map((file) => `import '${file}';`)
        .join("\n"),
    },
    banner: {
      js: '(() => new EventSource("/~dev").onmessage = () => location.reload())();',
    },
    plugins: [
      {
        name: "htmlplus",
        async setup(build) {
          debugger;
          const { start, next, finish } = a.compiler(
            a.read(),
            a.parse(),
            a.validate(),
            a.extract({
              prefix: "plus",
            }),
            a.scss({
              includePaths: ["./src/styles"],
            }),
            a.attach({
              members: true,
              styles: true,
            }),
            a.uhtml({
              dev: true,
              prefix: "plus",
              dist: "./dist/components",
            }),
            a.print(),
            a.esbuild()
          );

          await start();

          build.onLoad({ filter: /\.tsx$/ }, async (args) => {
            debugger;
            const { script } = await next(args.path);
            console.log(11111111, script);
            return {
              contents: script,
            };
          });
        },
      },
    ],
    watch: {
      onRebuild(error) {
        clients.forEach((client) => client.write("data: update\n\n"));

        clients.length = 0;

        console.log(
          error ? error : `[${new Date().toLocaleTimeString()}] Rebuild.`
        );
      },
    },
  })
  .then(() => serve())
  .catch(() => process.exit(1));

const serve = () => {
  esbuild
    // TODO
    .serve({ servedir: "public" }, {})
    .then((server) => {
      http
        .createServer((req, res) => {
          const { url, method, headers } = req;

          if (url === "/~dev")
            return clients.push(
              res.writeHead(200, {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                Connection: "keep-alive",
              })
            );

          // TODO
          const path = ~url.split("/").pop().indexOf(".") ? url : `/index.html`;

          const proxy = http.request(
            {
              hostname: "0.0.0.0",
              port: server.port,
              path,
              method,
              headers,
            },
            (response) => {
              res.writeHead(response.statusCode, response.headers);

              response.pipe(res, { end: true });
            }
          );

          req.pipe(proxy, { end: true });
        })
        .listen(config.port);

      if (clients.length === 0) {
        const platforms = {
          darwin: ["open"],
          linux: ["xdg-open"],
          win32: ["cmd", "/c", "start"],
        };

        const command = platforms[process.platform][0];

        const args = [
          ...[platforms[process.platform].slice(1)],
          `http://localhost:${config.port}`,
        ];

        spawn(command, args);
      }

      console.log(
        `[${new Date().toLocaleTimeString()}] Start on http://localhost:${
          config.port
        } in ${Date.now() - time}ms`
      );
    });
};
