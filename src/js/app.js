class Validator {
  validateUsername(user) {
    this.user = user;
    return /^[\w-]+$/.test(this.user)
      && !/[\d]{4,}/.test(this.user)
      && /^[^\d_-]/.test(this.user)
      && /[^\d_-]$/.test(this.user);
  }
}

export default Validator;
