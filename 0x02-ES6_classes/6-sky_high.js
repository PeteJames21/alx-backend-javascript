import Building from './5-building.js';

/**
 * Models a building
 */
export default class SkyHighBuilding extends Building {
  /**
   *
   * @param {number} sqft
   * @param {number} floors
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
