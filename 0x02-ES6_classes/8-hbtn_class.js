export default class HolbertonClass {
  /**
   *
   * @param {number} size
   * @param {string} location
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Used when JS needs to convert an instance of this class to a primitive
  // type, such as a number or boolean
  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}
