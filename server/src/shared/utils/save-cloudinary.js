import cloudinary from "../../services/cloudinary.service.js";

export async function saveCloudinary(file) {
  if (file) {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_chunked(file.path, (err, result) => {
        if (err) {
          console.error("Error:", err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    return result.url;
  }
}
