var CartItem = require("../../models/cartitem.js");
describe("cartitem", function() {
  var item = new CartItem('ITEM000001', 5);
  describe("constructor", function() {
    it("should accept barcode and count as parameters", function() {
      expect(item.barcode).toBe('ITEM000001');
      expect(item.count).toBe(5);
    });
  });

  describe("cartitem_getinfo", function() {
    it("base in barcode get item information", function() {
      var itemInfo = item.getInfo();
      expect(itemInfo.barcode).toBe('ITEM000001');
      expect(itemInfo.name).toBe('雪碧');
      expect(itemInfo.unit).toBe('瓶');
      expect(itemInfo.price).toBe(3.00);
    });
  });

  describe("cartitem_getPromotionCount", function() {
    it("get promotion count base in barcode and count", function() {
      var prmotioncount = item.getPromotionCount();
      expect(prmotioncount).toBe(1);
    });
  });

  describe("cartitem_subtotal", function() {
    it("get total base in barcode and count", function() {
      var total = item.subTotal();
      expect(total).toBe(12.00);
    });
  });
  describe("cartitem_getPromotionTotal", function() {
    it("get promotion total base in barcode and count", function() {
      var promotiontotal = item.getPromotionTotal();
      expect(promotiontotal).toBe(3.00);
    });
  });
});
