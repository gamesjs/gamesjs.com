(function(){
  ContributePage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("contribute","/pages/full/contribute",router);
    },
    onActivate: function(){
      $('#nav-links li').removeClass('active');
      $('#contribute-nav').addClass('active');
      this._super();
    }
  });
})();