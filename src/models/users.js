export class User {
  constructor(user) {
    this.id = user.id;
    this.parentID = user.parentID;
    this.title = user.name;
    this.children = user.children;
  }
}
