import routes from "./routes/routes.ts";
import docRoutes from "./routes/doc.ts";

Bun.serve({
  port: 3000,
  routes: {
    ...routes,
    ...docRoutes,
  },
  development: {
    console: true,
  },
});

console.log("app listening on port 3000");
