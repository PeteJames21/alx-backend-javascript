/**
 * Models an airport
 */
export default class airport {
  /**
   *
   * @param {string} name
   * @param {string} code
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this.code}]`
  }
}
