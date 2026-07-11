const yamlFile = Bun.file("./routes/api-docs.yaml");
const yamlContent = await yamlFile.text();

function docsHandler() {
  const html = `<!doctype html>
<html>
  <head><title>API Reference</title></head>
  <body>
    <script id="api-reference" data-url="/docs/spec"></script>
    <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
  </body>
</html>`;
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

function specHandler() {
  return new Response(yamlContent, {
    headers: { "Content-Type": "text/yaml" },
  });
}

export default {
  "/docs": docsHandler,
  "/docs/spec": specHandler,
  "/api/ping": () => Response.json({ pong: true }),
};
