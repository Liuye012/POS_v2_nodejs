var allItems = require("./load_AllItems.js");
var PromotionInfo = require("./load_Promotions.js");

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
}

CartItem.prototype.getInfo = function() {
  var barcodeTemp = this.barcode;
  var allitems = allItems();
  var items = allitems.filter(function(val) {
    return val.barcode === barcodeTemp;
  });
  return items[0];
};

CartItem.prototype.subTotal = function() {
  return this.getInfo().price * (this.count - this.getPromotionCount());
};

CartItem.prototype.getPromotionTotal = function() {
  return this.getInfo().price * this.getPromotionCount();
};

CartItem.prototype.getPromotionCount = function() {
  var promotioncount = 0;
  var barcode = this.barcode;
  var count = this.count;
  var promotionInfo=PromotionInfo();
  promotionInfo[0].barcodes.forEach(function(val) {
    if (val === barcode) {
      promotioncount = Math.floor(count / 3);
    }
  });
  return promotioncount;
};

module.exports = CartItem;
