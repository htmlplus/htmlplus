// TODO
// css [style]
// html [template]
// tsx [script]
// html [javascript:template]
// js [javascript:script]
// html [vue:template]
// js [vue:script]

export const prepare = () => {
  const name = "prepare";
  const next = (context) => {
    const regex = /```\w+\s\[\w+(:\w+)?\]\s[\S\s]*?```/g;

    const snippets = [];

    snippets.push({
      key: "readme",
      context: context.fileContent?.replace(regex, "")?.trim(),
    });

    context.fileContent?.match(regex)?.forEach((snippet) => {
      try {
        const lines = snippet.split("\n");

        const first = lines[0];

        const key = first
          ?.match(/\[\w+(:\w+)?\]/)
          ?.shift()
          ?.replace("[", "")
          ?.replace("]", "");

        const type = first
          ?.match(/```\w+/)
          ?.pop()
          ?.replace("```", "");

        const content = lines.slice(1, -1).join("\n");

        snippets.push({ key, type, content });
      } catch { }
    });

    context.fileContent = `
      @Element()
      class Test {
        a() {
          this.a = 123
        }
        render() {
          return (
            <> 
            </>
          );
        }
      }
    `;
  };
  return {
    name,
    next,
  };
};
