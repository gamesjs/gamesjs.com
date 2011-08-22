(function(){
  DocsRouter = Backbone.Router.extend({
    routes: {
      "docs": "docs"
    },
    initialize: function(){
      this.page = new DocsPage(this);
      goo.addPage(this.page);
    },
    docs: function(){
      goo.activatePage(this.page.name);
    }
  });

})();