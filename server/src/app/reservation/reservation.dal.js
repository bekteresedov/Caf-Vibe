import { reservationModel } from "./model/reservation.model.js";

export class ReservationDal {
  static async findReservationById(id) {
    return await reservationModel.findOne({ _id: id });
  }
  static async save(reservation) {
    return await reservationModel.create(reservation);
  }
  static async delete(id) {
    return await reservationModel.deleteOne({ _id: id });
  }
  static async all() {
    return await reservationModel.find({});
  }
}
