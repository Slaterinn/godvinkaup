export default function ({ req, res }: { req: any, res: any }) {
  if (process.server && req && req.headers && req.headers['x-forwarded-proto'] !== 'https') {
    const redirectUrl = `https://${req.headers.host}${req.url}`;
    res.writeHead(301, { Location: redirectUrl });
    res.end();
  }
}