(function(){

PageNotFoundRouter = Backbone.Router.extend({
  routes: {
    "404":            "pageNotFound"
  },
  initialize: function(){
    this.page = new PageNotFoundPage(this);
    goo.addPage(this.page);
  },
  pageNotFound: function() {
    goo.activatePage(this.page.name);
  }
});

})();
