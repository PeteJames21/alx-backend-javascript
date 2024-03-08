export default class Car {
  /**
   *
   * @param {string} brand
   * @param {string} motor
   * @param {string} color
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get brand() {
    return this._brand;
  }

  /**
   * Return a duplicate instance of this class.
   */
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
