(function(){
  AboutPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("about","/pages/about",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();