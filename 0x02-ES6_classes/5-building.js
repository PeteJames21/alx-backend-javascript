/**
 * An abstract class for modelling a building.
 *
 * This class cannot be instantiated and must implement the method
 * evacuationWarningMessage().
 */
export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
