(function(){
  AboutPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("about","/pages/full/about",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();