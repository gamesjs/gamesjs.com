(function(){
  AboutRouter = Backbone.Router.extend({
    routes: {
      "about": "about"
    },
    initialize: function(){
      this.page = new AboutPage(this);
      goo.addPage(this.page);
    },
    about: function(){
      goo.activatePage(this.page.name);
    }
  });

})();