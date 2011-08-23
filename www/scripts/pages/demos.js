(function(){
  DemosPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("demos","/pages/full/demos",router);
    },
    onActivate: function(){
      $('#nav-links li').removeClass('active');
      $('#demos-nav').addClass('active');
      this._super();
    }
  });
})();