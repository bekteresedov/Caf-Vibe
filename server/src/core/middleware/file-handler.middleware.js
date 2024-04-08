import multer from "multer";
import { FileFilter } from "../../shared/utils/file-filter.js";

export const fileHandlerMiddleware = (req, res, next, allowedMimes, size) => {
  if (!req.file) {
    console.log("next");
    next();
  }
  const fileFilter = new FileFilter(allowedMimes);
  const file = multer({
    dest: "uploads/",
    limits: { fileSize: size * 1024 * 1024 },
    fileFilter: fileFilter.fileFilter,
  }).single("file");
  file(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ succes: false, error: err.message });
    } else if (err) {
      return res.status(500).json({ succes: false, error: err.message });
    }
    next();
  });
};
