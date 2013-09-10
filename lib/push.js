(function () {
  "use strict";                                                                                                                                                                                                         
  var pushover = require('pushover-notifications');

  exports.sendMessage = function(message, callback){
    var p = new pushover( {
      user:'YOUR PUSHOVER ID',
      token: 'YOUR PUSHOVER TOKEN'
    }); 

    var msg = { 
      message: message.message,
      title: message.title,
      sound: 'magic', 
      priority: 1
    };  

    p.send( msg, function( err, result ) { 
      if ( err ) { 
        throw err;
      }   
      if(typeof(callback) === "function"){
        callback(result);
      }
    }); 
  };

})();
