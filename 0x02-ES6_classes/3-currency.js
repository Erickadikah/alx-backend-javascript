class Currency {
  constructor(code = '', name = '') {
    this._code = code;
    this._name = name;
  }
  //getters and setters
  set code(code = '') {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set name(name = '') {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  displayFullPrice() {
    return `${this._name} (${this._code})`;
  }
}
export default Currency;