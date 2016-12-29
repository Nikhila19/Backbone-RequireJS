define(['libs/backbone'], 
  function(Backbone){
    var ServiceModel = Backbone.Model.extend({
      defaults : {
        title: 'My Service',
        price: 100,
        checked: false
      },
      // initialize: function(data) {
        
      // }
      toggle: function(){
        this.set('checked', !this.get('checked'))
      },
      parse: function(data) {
        alert(data);
      }
    });
    return ServiceModel;
  }
)


