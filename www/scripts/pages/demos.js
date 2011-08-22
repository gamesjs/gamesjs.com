(function(){
  DemosPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("demos","/pages/demos",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();