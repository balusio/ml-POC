import express from 'express';
import React from 'React';
import path from 'path';
import App from './src/components/app';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import fs from 'fs';
const app = express();
const port = 3000;

app.use(express.static(path.resolve('dist')));

app.get('/*', (req,res) => {

  const context = { };
  const app = renderToString(
    <StaticRouter context={ context } location={ req.url }>
      <App />
    </StaticRouter>
  );
    return res.send( `<!DOCTYPE html>
      <html>
        <head>
        <meta charset="UTF-8">
        <title>Mercado libre test</title>
        <link rel="stylesheet" type="text/css" href="/css/style.css">
        </head>
        <body>
          <div id="app">${app}</div>
          <script src="/1.bundle.js"></script>
          <script src="/bundle.js"></script>
        </body>
      </html>
      `);
});

app.listen(port, () => console.log(`Mercado libre test is listening on port ${port}!`))
