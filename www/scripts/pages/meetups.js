(function(){
  MeetupsPage = goo.HTMLPage.inherit({
    init: function(router){
      this._super("meetups","/pages/meetups",router);
    },
    onActivate: function(){
      this._super();
    }
  });
})();