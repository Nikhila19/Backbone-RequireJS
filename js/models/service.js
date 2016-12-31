define(['libs/backbone'], 
  function(Backbone){
    var ServiceModel = Backbone.Model.extend({
      defaults : {
        service_id: 0, 
        title: 'My Service',
        price: 100,
        checked: false,
        details: 'My service details'
      },
      toggle: function(){
        this.set('checked', !this.get('checked'))
      }
    });
    return ServiceModel;
  }
)


