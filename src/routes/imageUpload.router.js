const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ensureIsAdmin = require("../middlewares/ensureIsAdmin");

const imageUploadRoute = Router();
const imgUpload = multer(uploadConfig.MULTER);

imageUploadRoute.post(
  "/",
  ensureAuthenticated,
  ensureIsAdmin,
  imgUpload.single("image"),
  (req, res) => res.status(200).json({ file: req.file.filename })
);

module.exports = imageUploadRoute;
