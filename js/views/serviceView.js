
// This is the serviceItem view

define([
  'libs/backbone', 'models/service'], 
  function(Backbone, serviceModel) {
    var ServiceView = Backbone.View.extend({
      // tagName: 'li',
      // className: "item-wrap",
      tagName: 'div',
      className: 'card',
      template: _.template($("#itemTemplate").html()),

      events: {
        'click .check': 'toggleService'
      },
      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        // this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" />' + this.model.get('title') + '  <span>$' + this.model.get('price') + '</span>');
        // this.$('input').prop('checked', this.model.get('checked'));
        return this;
      },
      toggleService: function() {
        this.model.toggle();
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
