import { APIError } from "../dto/error-response.js";
export class FileFilter {
  constructor(filterArr) {
    if (
      !Array.isArray(filterArr) ||
      filterArr.some((item) => typeof item !== "string")
    )
      throw new APIError("Filter array must be an array of strings.", 400);

    this.filterArr = filterArr;
  }

  fileFilter = (req, file, cb) => {
    // Supported file types
    console.log(this.filterArr);
    console.log(file.mimetype);
    const allowedMimes = this.filterArr;
    // File type check
    if (allowedMimes.includes(file.mimetype)) {
      // Allowed file types
      cb(null, true);
    } else {
      // Unsupported file types
      cb(
        new APIError("Selected file format or size is not acceptable", 400),
        false
      );
    }
  };
}
