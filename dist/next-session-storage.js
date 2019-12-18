/*!
 * name: @feizheng/next-session-storage
 * description: SessionStorage based on next.
 * url: https://github.com/afeiship/next-session-storage
 * version: 1.0.0
 * date: 2019-12-18 19:32:31
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractStorage = nx.AbstractStorage || require('@feizheng/next-abstract-storage');

  var NxSessionStorage = nx.declare('nx.SessionStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function(inPrefix) {
        this.base({
          engine: global.sessionStorage,
          prefix: inPrefix || ''
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSessionStorage;
  }
})();

//# sourceMappingURL=next-session-storage.js.map
