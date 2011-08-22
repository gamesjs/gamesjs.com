(function(){
  DocsPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("docs","/pages/docs",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();