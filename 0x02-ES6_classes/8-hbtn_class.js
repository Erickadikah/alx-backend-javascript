class HolbertonClass {
  constructor(size = 0, location = '') {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](atr) {
    if (atr === 'number') {
      return `${this._size}`;
    }
    return `${this._location}`;
  }
}

export default HolbertonClass;
