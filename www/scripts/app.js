(function(){

$(function(){
  routers = {
    "home": new HomeRouter(),
    "login": new DemosRouter(),
    "docs": new DocsRouter(),
    "contribute": new ContributeRouter(),
    "pageNotFound": new PageNotFoundRouter()
  }
  
  if( !Backbone.history.start({pushState:true}) ){
    routers.home.navigate("404", true);
  };
  
  // Make sure 
  goo.replaceLinks($(document.body));
  
  $('.container').fadeIn(1000);
});

})();