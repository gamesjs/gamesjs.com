(function(){

// Create Project Namespace. Used a function instead of Object so that
// The simple inheritance function 
goo = {};

//  Simple Inheritance mechanism based on John Resig's Implementation
//    http://ejohn.org/blog/simple-javascript-inheritance/  
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  // Create a new Class that inherits from this class
  var Class = function(){};
  
  goo.inherit = function(prop) {
    var self = this==goo?Class:this,
        _super = self.prototype;
    
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new self();
    initializing = false;
    
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" && 
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
            
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
            
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    
    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
    
    // Populate our constructed prototype object
    Class.prototype = prototype;
    
    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class inheritable
    Class.inherit = arguments.callee;
    
    return Class;
  };
})();

var pages = {},
    prevPage,nextPage;
goo.Page = goo.inherit({
  init: function(name){
    this.name = name;
  },
  // CB for the page to prep for being deactivated. Different than onDeactivate
  // because the new page may have to fetch data before being ready to show.
  // We do this so that there is no flicker between when this page's DOM gets
  // detached/hidden and the new one gets shown.
  beforeDeactivate: function(){
          
  },
  // CB for when the page is about to be deactivated
  onDeactivate: function(){
  },
  
  // CB to prep for the page to prep for being activated. It can be used to
  // fetch remove resources before being displayed. Return:
  // false: To indicate that no resources are being fetched. This will call
  //        onActivate immediately after this call.
  // true:  To indicate some asynchronous action must complete before truly being
  //        activated. Call ready() when done. 
  beforeActivate: function(){
    return false;      
  },
  // CB for when the page is about to be activated. This is the place to attach
  // DOM elements to the page 
  onActivate: function(){
  },
  ready: function(){
    if(this!==nextPage){
      throw "Page wasn't not in the process of being activated!";
    }
    prevPage = goo.currentPage;
    goo.currentPage = nextPage;
    nextPage = undefined;
    if(prevPage){
      prevPage.onDeactivate();
    }
    goo.currentPage.onActivate();
  }
});

goo.HTMLPage = goo.Page.inherit({
  init: function(name,url,router){
    this._super(name);
    this.url = url;
    this.router = router;
    this.htmlLoaded = false;
  },
  onDeactivate: function(){
    this.html.detach();
  },
  beforeActivate: function(){
    var self = this;
    goo.fetchHTML(this.url,this.router,function(html){
      self.html = html;
      if(self.htmlLoaded===false){
        self.htmlLoaded=true;
        self.onHTML(self.html);
      }
      
      self.ready();
    });
    return true;
  },
  onHTML: function(html){
  },
  onActivate: function(){
    this.html.appendTo('#page-content');
  },
  
  // Event Wrappers
  addEventListener: function(elem,event,fn,useCapture){
    var self = this;
    elem.addEventListener(event,function(){
      if(goo.currentPage===self){
        fn.apply(this, arguments);
      }
    },useCapture);
  }
});



goo.addPage = function(page){
  if(pages[page.name]!==undefined){
    throw "Page Already Exists!"; 
  }
  pages[page.name] = page;
}
goo.removePage = function(page){
  if(pages[page.name]===undefined){
    throw "Page Does Not Exists!";
  }
  pages[page.name] = undefined;
}

goo.activatePage = function(pageName){
  if(pages[pageName]===undefined){
    throw "Page Does Not Exists!";
  }
  nextPage = pages[pageName];
  
  if(goo.currentPage){
    goo.currentPage.beforeDeactivate();
  }
      
  if(nextPage.beforeActivate()===false){
    prevPage = goo.currentPage;
    goo.currentPage = nextPage;
    if(prevPage){
      prevPage.onDeactivate();
    }
    nextPage.onActivate();
  }
}
  
goo.replaceLinks = function(selector,router){
  selector.find('a').each(function(idx,e){
    if($(e).attr("href")&&$(e).attr("href").length){
      // Replace all internal links with the history.js
      // style programmatic ones.
      if($(e).attr("href")[0]=="/"){
        var newUrl = $(e).attr("href").substr(1);
        $(e).click(function(event){
          
          // Open new tab if ctrl/command key was done
          if(event.metaKey){
            window.open('/'+newUrl,'_'+Math.random()*100000);
          } else{
            Backbone.Router.prototype.navigate(newUrl, true);
          }
          event.preventDefault();
        });
      }
    }
  });
}

goo.followLink = function(url,newTab){
  if(url&&url.length){
    // Replace all internal links with the history.js
    // style programmatic ones.
    if(url[0]=="/"){
      var newUrl = url.substr(1);
      // Open new tab if ctrl/command key was done
      if(newTab){
        window.open('/'+newUrl,'_'+Math.random()*100000);
      } else{
        Backbone.Router.prototype.navigate(newUrl, true);
      }
    } else {
      window.location.href = url;
    }
  }
}

var htmlCache = {};
goo.fetchHTML = function(url,router,onLoaded){
  // Fetch the HTML if it's not already cached/setup
  if(htmlCache[url]===undefined){
    $.ajax({
      url: url,
      dataType: "html",
      success: function(data) {
        var html = $(data);
        htmlCache[url] = html;
        goo.replaceLinks(html,router);
        onLoaded(html);
      }
    });
  } else {
    onLoaded(htmlCache[url]);
  }
}

  
  
})();