(function(){
  DemosRouter = Backbone.Router.extend({
    routes: {
      "demos": "demos"
    },
    initialize: function(){
      this.page = new DemosPage(this);
      goo.addPage(this.page);
    },
    demos: function(){
      goo.activatePage(this.page.name);
    }
  });

})();