$(function(){
  HomePage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("home","/pages/full/home",router);
    },
    onActivate: function(){
      $('#nav-links li').removeClass('active');
      $('#home-nav').addClass('active');
      this._super();
    }
  });
});

