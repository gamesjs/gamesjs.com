(function(){
  DemosPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("demos","/pages/full/demos",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();