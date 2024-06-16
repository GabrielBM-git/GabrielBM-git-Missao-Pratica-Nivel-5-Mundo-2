const express = require("express");
const cors = require("cors");

const PORT = 3001;
const corsOpts = {
   origin: "*", methods: ["GET", "POST", "DELETE"],
   allowedHeaders: ["Content-Type"],
};

const routes = require("../routes/route");
const app = express();

app.use(express.json());
app.use(cors(corsOpts));

app.use(routes);

app.listen(PORT, () => {
   console.log(`Servidor Rodando em http://localhost:${PORT}`)
});