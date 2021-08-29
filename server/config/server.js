const express = require("express");
const cors = require("cors");
const path = require("path");
const { applyRouter } = require("../router");

const PUBLIC_DIR = path.join(__dirname, "../../build");

exports.configure = function (server) {
  const router = express.Router();

  server.use(cors());
  server.use(express.json());
  server.use(express.static(PUBLIC_DIR));
  server.use("/api/v1", applyRouter(router));

  return server;
};
