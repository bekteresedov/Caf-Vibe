export class AuthResponse {
  constructor(user) {
    this.id = user._id;
    this.fullname = user.fullname;
    this.profilePhoto = user.profilePhoto;
  }
}
