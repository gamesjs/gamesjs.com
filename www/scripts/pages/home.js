$(function(){

  HomePage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("home","/pages/full/home",router);
    },
    onActivate: function(){
      this._super();
    }
  });
});

