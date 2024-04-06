import { ApiResponse } from "../../shared/dto/api-response.js";
import { ReservationResponse } from "./dto/reservation.dto.js";
import { ReservationService } from "./reservation.service.js";

export class ReservationController {
  static async findReservationById(request, response) {
    const data = await ReservationService.findReservationById(
      request.params.id
    );
    return new ApiResponse(
      new ReservationResponse(data),
      "Reservation find  successfully"
    ).success(response);
  }
  static async save(request, response) {
    const data = await ReservationService.save(request.body);
    return new ApiResponse(
      new ReservationResponse(data),
      "Reservation save  successfully"
    ).success(response);
  }
  static async delete(request, response) {
    await ReservationService.delete(request.params.id);
    return new ApiResponse(null, "Reservation deleted  successfully").success(
      response
    );
  }
  static async all(request, response) {
    const data = await ReservationService.all();
    return new ApiResponse(
      data.map((res) => new ReservationResponse(res)),
      "Reservation All  successfully"
    ).success(response);
  }
}
