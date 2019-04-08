var checkExist = setInterval(function() {
   if ($('#the-canvas').length) {
      console.log("Exists!");
      clearInterval(checkExist);
   }
}, 100); // check every 100ms