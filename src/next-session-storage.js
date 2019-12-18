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
