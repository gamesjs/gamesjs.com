(function(){
  KickoffMeetupRouter = Backbone.Router.extend({
    routes: {
      "meetups/javascript-and-html5-games-kickoff-meeting": "kickoff"
    },
    initialize: function(){
      this.page = new KickoffMeetupPage(this);
      goo.addPage(this.page);
    },
    kickoff: function(){
      goo.activatePage(this.page.name);
    }
  });

})();