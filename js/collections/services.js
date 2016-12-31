define(['libs/backbone', 'models/service'], 
  function(Backbone, serviceModel){

    var ServiceCollection = Backbone.Collection.extend({
      model: serviceModel,

      // initialize: function(options) {
      //   //Must explore ways of instantiating individual models here in the collection

      //   // options.items.forEach(function(item) {
      //   //   alert("in collection " + JSON.stringify(item))
      //   //   this.add(new serviceModel(item));
      //   // }.bind(this));
      //   Backbone.Collection.prototype.initialize.apply(this,arguments);
      //   return this;
      // },
      getChecked: function() {
        return this.where({checked:true});
      }

    });
    return ServiceCollection;
  }
)


