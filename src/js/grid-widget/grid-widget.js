export class GridWidgit {
  constructor(element) {
    this._element = element;
    this.cells = this._element.querySelectorAll(".cell");
    this.activeCell = Math.floor(Math.random() * this.cells.length);
    this.cells[this.activeCell].classList.add("active");
  }

  changeActiveCell() {
    this.cells[this.activeCell].classList.remove("active");
    this.activeCell = this._getRandomCellIndex(this.activeCell);
    this.cells[this.activeCell].classList.add("active");
  }

  _getRandomCellIndex(currentCellIndex) {
    const availableIndexes = Array.from(
      { length: this.cells.length },
      (_, i) => i,
    ).filter((i) => i !== currentCellIndex);
    const randomIndex =
      availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    return randomIndex;
  }
}
