class StringHelper {
  static random(min, max) {
    // Generate a random number between min and max
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

module.exports = StringHelper;