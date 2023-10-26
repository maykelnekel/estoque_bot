class StockItem {
  name;
  quantity;
  updateDate;
  lastUpdatedUser;
  creatorUser;
  creationDate = new Date();

  constructor(name, quantity, creatorUser) {
    this.name = name;
    this.quantity = quantity;
    this.creatorUser = creatorUser;
    this.lastUpdatedUser = creatorUser;
    this.updateDate = this.creationDate;
  }
}

export default StockItem;
