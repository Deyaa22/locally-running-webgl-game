const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// Enable Gzip compression
app.use(compression());

// Serve the Unity WebGL build folder
app.use(express.static(path.join(__dirname, 'Game-Build'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.gz')) {
            res.setHeader('Content-Encoding', 'gzip');
            if (filePath.endsWith('.wasm.gz')) {
                res.setHeader('Content-Type', 'application/wasm');
            } else if (filePath.endsWith('.js.gz')) {
                res.setHeader('Content-Type', 'application/javascript');
            } else if (filePath.endsWith('.data.gz')) {
                res.setHeader('Content-Type', 'application/octet-stream');
            } else if (filePath.endsWith('.html.gz')) {
                res.setHeader('Content-Type', 'text/html');
            }
        }
    }
}));

// Fallback route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
