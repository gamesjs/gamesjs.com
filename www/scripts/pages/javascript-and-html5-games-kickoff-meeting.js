(function(){
  KickoffMeetupPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("javascript-and-html5-games-kickoff-meeting","/pages/meetups/javascript-and-html5-games-kickoff-meeting",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();