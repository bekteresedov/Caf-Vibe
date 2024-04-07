import { APIError } from "../../shared/dto/error-response.js";
import { decodedToken } from "../utils/auth/decoded-token.js";

export const isAdmin = async (request, response, next) => {
  const deToken = await decodedToken(request.cookies.accessToken);
  if (deToken.role == "admin") {
    next();
  } else {
    throw new APIError("Unauthorized - Admin access required", 403);
  }
};
