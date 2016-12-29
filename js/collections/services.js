define(['libs/backbone', 'models/service'], 
  function(Backbone, serviceModel){

    var ServiceCollection = Backbone.Collection.extend({
      model: serviceModel,
      getChecked: function() {
        return this.where({checked:true});
      }, 
      initialize: function(options) {
        // options.items.forEach(function(item) {
        //   alert("in collection " + JSON.stringify(item))
        //   this.add(new serviceModel(item));
        // }.bind(this));
        Backbone.Collection.prototype.initialize.apply(this,arguments);
        alert("in collection " + JSON.stringify(this.models));
        return this;
      }

    });
    return ServiceCollection;
  }
)


