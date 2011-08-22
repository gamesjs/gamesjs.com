(function(){
  ContributePage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("contribute","/pages/contribute",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();