import Currency from "./3-currency.js";

export default class Pricing {
  /**
   *
   * @param {number} amount
   * @param {Currency} currency
   */
  constructor (amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw TypeError('"amount" must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw TypeError('"currency" must be of type "Currency"');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }


  /**
   *
   * @param {number} amount
   * @param {number} conversionRate
   * @returns the product of amount and conversionRate
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate
  }
}
