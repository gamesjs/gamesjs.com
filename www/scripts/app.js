(function(){

$(function(){
  routers = {
    "home": new HomeRouter(),
    "login": new DemosRouter(),
    "about": new AboutRouter(),
    "meetups": new MeetupsRouter(),
    "contribute": new ContributeRouter(),
    "pageNotFound": new PageNotFoundRouter()
  }
  
  if( !Backbone.history.start({pushState:true}) ){
    routers.home.navigate("404", true);
  };
  
  // Make sure than any hud has it's links
  // replaced with procedural click event hooks
  // so that the history.js behavior works.
  goo.replaceLinks($(document.body));
  
  $('.container').fadeIn(1000);
});

})();