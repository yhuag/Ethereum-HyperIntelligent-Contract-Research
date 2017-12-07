var Coupon = artifacts.require("./Coupon.sol");
var Market = artifacts.require("./Market.sol");

contract('Coupon', function(accounts) {
  it("Accessibility Test", function() {
  });

  it("Market Instantiation Test", async function() {
    let market = await Market.new();
    var volume = await market.volume.call();
    assert.equal(0, volume, "volume is not zero");
  });

  it("Market Next ID Test", async function() {
    let market = await Market.new();
    var volume = await market.getNextID.call();
    assert.equal(1, volume, "volume should be 1");
  });
});
