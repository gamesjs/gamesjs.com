(function(){

HomeRouter = Backbone.Router.extend({
  routes: {
    "": "home"
  },
  initialize: function(){
    this.page = new HomePage(this);
    goo.addPage(this.page);
  },
  home: function() {
    goo.activatePage(this.page.name);
  }
});

})();

