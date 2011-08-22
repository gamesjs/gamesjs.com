(function(){
  MeetupsRouter = Backbone.Router.extend({
    routes: {
      "meetups": "meetups"
    },
    initialize: function(){
      this.page = new MeetupsPage(this);
      goo.addPage(this.page);
    },
    meetups: function(){
      goo.activatePage(this.page.name);
    }
  });

})();