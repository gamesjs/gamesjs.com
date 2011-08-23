(function(){
  KickoffMeetupPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("javascript-and-html5-games-kickoff-meeting","/pages/meetups/javascript-and-html5-games-kickoff-meeting",router);
    },
    onActivate: function(){
      $('#nav-links li').removeClass('active');
      $('#meetups-nav').addClass('active');
      this._super();
    }
  });
})();