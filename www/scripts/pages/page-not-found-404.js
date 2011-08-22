(function(){
  PageNotFoundPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("page-not-found-404","/pages/page-not-found-404",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();