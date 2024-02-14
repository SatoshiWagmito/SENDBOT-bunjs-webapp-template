import http from 'http';
import httpProxy from 'http-proxy';

// Create a proxy server with custom application logic
const proxy = httpProxy.createProxyServer({});

// Define your application servers
const servers = ['http://127.0.0.1:3001', 'http://127.0.0.1:3002', 'http://127.0.0.1:3003'];
let current = 0;

// Create a standard Node HTTP server which listens on port 80
const server = http.createServer((req, res) => {
    // Implement round-robin load balancing
    const target = servers[current];
    current = (current + 1) % servers.length;

    proxy.web(req, res, { target: target }, (error) => {
        console.error(`Proxy error: ${error.message}`);
        res.writeHead(502); // Bad Gateway
        res.end('Proxy request error');
    });
});

server.listen(3000, () => {
    console.log('Load balancer running on http://localhost:3000');
});
