var requirejs = require('requirejs');

console.log('passed requirejs');

requirejs.config({
   //load the mode modules to top level JS file 
   //by passing the top level main.js require function to requirejs
   nodeRequire: require
});

requirejs(['example1', 'example2'],
   function (name1, name2) {
      //by using requirejs config, name1 and name2 are loaded
      //node's require loads the module, if they did not find these
   }
);

console.log('ready mama2');
