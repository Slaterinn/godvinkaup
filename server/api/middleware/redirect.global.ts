// server/middleware/https-redirect.js

import { IncomingMessage, ServerResponse } from 'http';

export default function ({ req, res }: { req: IncomingMessage, res: ServerResponse }) {
  const isHttps = req.headers['x-forwarded-proto'] === 'https';
  
  if (!isHttps) {
    const redirectUrl = `https://${req.headers.host}${req.url}`;
    res.writeHead(301, { Location: redirectUrl });
    res.end();
  }
}
