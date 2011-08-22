(function(){
  MeetupsPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("meetups","/pages/full/meetups",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();