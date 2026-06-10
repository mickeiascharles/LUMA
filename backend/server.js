const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = Number(process.env.PORT || 3000);
const ROOT_DIR = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT_DIR, "assets");
const DATA_PATH = path.join(__dirname, "data", "luma-data.json");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon"
};

function loadData() {
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*"
  });
  response.end(JSON.stringify(payload, null, 2));
}

function sendNotFound(response) {
  sendJson(response, 404, {
    error: "not_found",
    message: "Rota nao encontrada no backend LUMA."
  });
}

function serveStatic(requestUrl, response) {
  const pathname = decodeURIComponent(requestUrl.pathname);
  const safePath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(PUBLIC_DIR, safePath));

  if (!filePath.startsWith(PUBLIC_DIR)) {
    sendJson(response, 403, {
      error: "forbidden",
      message: "Caminho de arquivo nao permitido."
    });
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      sendNotFound(response);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream"
    });
    response.end(content);
  });
}

function handleApi(request, response, requestUrl) {
  const data = loadData();
  const route = requestUrl.pathname;

  if (route === "/api/health") {
    sendJson(response, 200, {
      ok: true,
      service: "luma-backend",
      timestamp: new Date().toISOString()
    });
    return;
  }

  if (route === "/api/luma") {
    sendJson(response, 200, data.project);
    return;
  }

  if (route === "/api/mission") {
    sendJson(response, 200, data.missionSteps);
    return;
  }

  if (route === "/api/components") {
    sendJson(response, 200, data.components);
    return;
  }

  if (route.startsWith("/api/components/")) {
    const id = route.split("/").pop();
    const component = data.components.find((item) => item.id === id);
    if (!component) {
      sendNotFound(response);
      return;
    }
    sendJson(response, 200, component);
    return;
  }

  if (route === "/api/telemetry") {
    sendJson(response, 200, {
      ...data.telemetrySample,
      generatedAt: new Date().toISOString()
    });
    return;
  }

  if (route === "/api/ai/status") {
    sendJson(response, 200, data.ai);
    return;
  }

  sendNotFound(response);
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);

  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    response.end();
    return;
  }

  if (request.method !== "GET") {
    sendJson(response, 405, {
      error: "method_not_allowed",
      message: "Este backend basico aceita apenas requisicoes GET."
    });
    return;
  }

  if (requestUrl.pathname.startsWith("/api/")) {
    handleApi(request, response, requestUrl);
    return;
  }

  serveStatic(requestUrl, response);
});

server.listen(PORT, () => {
  console.log(`LUMA backend rodando em http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
