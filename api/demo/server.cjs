const http = require('node:http');
const { randomUUID } = require('node:crypto');

const users = new Map();

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(body === undefined ? undefined : JSON.stringify(body));
}

const server = http.createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;

  if (req.method === 'GET' && path === '/health') {
    return send(res, 200, { status: 'ok' });
  }

  if (req.method === 'POST' && path === '/users') {
    let body;

    try {
      let raw = '';
      for await (const chunk of req) {
        raw += chunk;
        if (Buffer.byteLength(raw) > 16_384) {
          return send(res, 413, { error: 'Body too large' });
        }
      }
      body = JSON.parse(raw);
    } catch {
      return send(res, 400, { error: 'Invalid JSON' });
    }

    if (
      !body ||
      typeof body.name !== 'string' ||
      !body.name.trim() ||
      typeof body.email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
    ) {
      return send(res, 400, { error: 'Valid name and email required' });
    }

    const user = {
      id: randomUUID(),
      name: body.name.trim(),
      email: body.email
    };

    users.set(user.id, user);
    return send(res, 201, user);
  }

  const match = path.match(/^\/users\/([^/]+)$/);

  if (match && ['GET', 'DELETE'].includes(req.method)) {
    const id = match[1];

    if (!users.has(id)) {
      return send(res, 404, { error: 'User not found' });
    }

    if (req.method === 'GET') {
      return send(res, 200, users.get(id));
    }

    users.delete(id);
    return send(res, 204);
  }

  return send(res, 404, { error: 'Route not found' });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Demo API: http://127.0.0.1:3000');
});