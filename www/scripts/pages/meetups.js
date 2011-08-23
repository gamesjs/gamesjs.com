(function(){
  MeetupsPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("meetups","/pages/full/meetups",router);
    },
    onActivate: function(){
      $('#nav-links li').removeClass('active');
      $('#meetups-nav').addClass('active');
      this._super();
    }
  });
})();