(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxSessionStorage = require('../src/next-session-storage');

  describe('NxSessionStorage.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
