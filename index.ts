import routes from "./routes/routes.ts";

Bun.serve({
  port: 3000,
  routes,
  development: {
    console: true,
  },
});

console.log("app listing on port 3000");
