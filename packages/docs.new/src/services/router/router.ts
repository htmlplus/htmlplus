export interface Route {
  name: string,
  path: string
}

export class Router {

  private readonly routes: Route[] = [];

  all() {
    return this.routes;
  }

  find(name: string): Route {
    return this.routes.find((item) => item.name === name);
  }

  path(name: string, params?: object): string {

    const route = this.find(name);

    if (!route) return;

    let path = route.path;

    Object.keys(params || {})
      .map((key) => {
        path = path.replace(`[${key}]`, params[key])
      });

    return path;
  }

  register(route: Route): Route {

    this.routes.push(route);

    return route;
  }
}
