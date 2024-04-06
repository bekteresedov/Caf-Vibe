export class ReservationResponse {
  constructor(model) {
    this.id = model._id;
    this.name = model.name;
    this.date = model.date;
    this.time = model.time;
    this.guest = model.guest;
    this.phoneNumber = model.phoneNumber;
  }
}
