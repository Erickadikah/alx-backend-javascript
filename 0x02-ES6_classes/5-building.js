class Building {
    constructor(sqft = 0) {
        this._sqft = sqft;
    }

    set sqft(sqft = 0) {
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    evacuationWarningMessage() {
        if (this.contrustor !== evacuationWarningMessage) {
            throw Error('Class extending Building must override evacuationWarningMessage')
        }
    }
}

export default Building;