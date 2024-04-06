import { APIError } from "../../shared/dto/error-response.js";
import { ReservationDal } from "./reservation.dal.js";

export class ReservationService {
  static async findReservationById(id) {
    const data = await ReservationDal.findReservationById(id).catch((er) =>
      console.log(er)
    );
    if (!data) throw new APIError("Reservation not found!", 404);
    return data;
  }
  static async save(reservation) {
    return ReservationDal.save(reservation);
  }
  static async delete(id) {
    const data = await ReservationService.findReservationById(id);
    await ReservationDal.delete(data._id);
    return null;
  }
  static async all() {
    return await ReservationDal.all();
  }
}
