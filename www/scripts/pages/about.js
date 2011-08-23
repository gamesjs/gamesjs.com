(function(){
  AboutPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("about","/pages/full/about",router);
    },
    onActivate: function(){
      $('#nav-links li').removeClass('active');
      $('#about-nav').addClass('active');
      this._super();
    }
  });
})();