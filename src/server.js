import express from 'express';
import React from 'React';
import path from 'path';
import App from './components/app';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import fs from 'fs';
const app = express();
const port = 3000;

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get('*', (req,res) => {

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
        <link rel="stylesheet" type="text/css" href="css/style.css">
        </head>
        <body>
          <div id="app">${app}</div>
          <script src="bundle.js></script>
        </body>
      </html>
      `);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
