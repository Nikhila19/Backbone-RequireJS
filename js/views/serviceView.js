
// This is the serviceItem view

define([
  'libs/backbone', 'models/service'], 
  function(Backbone, serviceModel) {
    var ServiceView = Backbone.View.extend({
      tagName: 'li',

      render: function() {
        // alert(JSON.stringify(this.model.get('title')));

        this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" />' + this.model.get('title') + '  <span>$' + this.model.get('price') + '</span>');
        this.$('input').prop('checked', this.model.get('checked'));
        return this;
      },
      initialize: function(model) {
        Backbone.View.prototype.initialize.apply(this, arguments);
        alert(JSON.stringify(model));
        // alert(JSON.stringify(this.model.get('title')));

        // this.model = new serviceModel(modelObj);
        // this.listenTo(this.model, 'change', this.render);
        // $('#services').append(this.render().el)
      }
    });
    return ServiceView;
})

// define([
//   'libs/backbone', 'models/service'], 
//   function(Backbone, serviceModel) {
//   var ServiceView = Backbone.View.extend({
//     tagName: 'li',
//     // model: new serviceModel(),

//     render: function() {
//       this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" />' + this.model.get('title') + '  <span>$' + this.model.get('price') + '</span>');
//       this.$('input').prop('checked', this.model.get('checked'));
//       return this;
//     },
//     initialize: function(modelObj) {
//       this.model = new serviceModel(modelObj);
//       // this.listenTo(this.model, 'change', this.render);
//       $('#services').append(this.render().el)
//     }
//   });
//   return ServiceView;
// })
