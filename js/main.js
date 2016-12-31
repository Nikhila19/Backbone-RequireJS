require.config({
  baseUrl: "./js",
  paths: {
    jquery:'libs/jquery',
    underscore:'libs/underscore',
    backbone:'libs/backbone.js'
  },
  shims: {
    'libs/underscore': { 
      exports: '_'
    },
    'libs/backbone': {
      deps: ['libs/underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

// var serviceItem = { title: 'web development', price: 200};
var items = [
  { service_id: 1, title: 'web development', price: 200,
    details: 'this is a service of web development'
  },
  { service_id: 2, title: 'web design', price: 250,
    details: 'this are the details of the web design service'
  },
  { service_id: 3, title: 'photography', price: 100,
    details: 'photography details'
  },
  { service_id: 4, title: 'coffee drinking', price: 10,
    details: 'this is the way to drink your coffee'
  }
]

require(['jquery', 'libs/underscore', 'libs/backbone', 'models/service', 'collections/services', 'views/servicesCollectionView'],  
  function($, _, Backbone, ServiceModel, ServicesCollection, ServicesCollectionView) {
    $(function(){
      var serviceModels = []
      items.forEach(function(item) {
        serviceModels.push(new ServiceModel(item));
      })
      var serviceCollection = new ServicesCollection(serviceModels);
      new ServicesCollectionView({collection: serviceCollection});
    });
  }
);
// require(['jquery', 'libs/underscore', 'libs/backbone', 'views/service'],  
//   function($, _, Backbone, ServiceView) {
//     $(function(){
//       new ServiceView(serviceItem);
//     });
//   }
// );










// var app = app || { Models: {}, Collections: {}, Views: {}};

// var ServiceModel = require('./models/service');
// var ServiceCollection = require('collection/service');

// var services = new ServiceCollection([
//   new Service({ title: 'web development', price: 200}),
//   new Service({ title: 'web design', price: 250}),
//   new Service({ title: 'photography', price: 100}),
//   new Service({ title: 'coffee drinking', price: 10})
// ]);