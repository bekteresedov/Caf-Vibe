export class UserResponse {
  constructor(user) {
    this.id = user._id;
    this.fullname = user.fullname;
    this.profilePhoto = user.profilePhoto;
    this.phoneNumber = user.contact.phoneNumber;
    this.email = user.contact.email;
  }
}
