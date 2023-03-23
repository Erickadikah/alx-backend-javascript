import Currency from './3-currency';

class Pricing {
  constructor(amount = 0, currency = Currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount = 0) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency = '') {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullPrice()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
export default Pricing;
