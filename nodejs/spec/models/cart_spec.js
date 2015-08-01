var Cart = require("../../models/cart.js");
describe("cart", function() {
  var cart = new Cart();
  describe("cart_addItems", function() {
    it("add item to CartItems", function() {
      cart.addItems('ITEM000001', 1);
      expect(cart.CartItems[0].barcode).toBe('ITEM000001');
      expect(cart.CartItems[0].count).toBe(1);
      cart.addItems('ITEM000001', 4);
      expect(cart.CartItems[0].barcode).toBe('ITEM000001');
      expect(cart.CartItems[0].count).toBe(5);
      cart.addItems('ITEM000003', 2);
      expect(cart.CartItems[1].barcode).toBe('ITEM000003');
      expect(cart.CartItems[1].count).toBe(2);
    });
  });
  describe("cart_getSum", function() {
    it("get sum of items", function() {
      var sum = cart.getSum();
      expect(sum).toBe(42.00);
    });
  });
  describe("cart_getSumPromotionTotal", function() {
    it("get sum of promotiontotal ", function() {
      var sumpromotiontotal = cart.getSumPromotionTotal();
      expect(sumpromotiontotal).toBe(3.00);
    });
  });
});
