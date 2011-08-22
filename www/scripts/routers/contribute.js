(function(){
  ContributeRouter = Backbone.Router.extend({
    routes: {
      "contribute": "contribute"
    },
    initialize: function(){
      this.page = new ContributePage(this);
      goo.addPage(this.page);
    },
    contribute: function(){
      goo.activatePage(this.page.name);
    }
  });

})();