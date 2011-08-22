(function(){
  ContributePage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("contribute","/pages/full/contribute",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();