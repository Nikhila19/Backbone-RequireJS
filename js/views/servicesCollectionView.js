
// This is the services Collection View

define([
  'libs/backbone', 'views/serviceView', 'models/service'], 
  function(Backbone, serviceView, serviceModel) {

    var ServicesCollectionView = Backbone.View.extend({
      el:'#services',
      // tagName: "ul",
      events: {},

      // render: function() {
      //   this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" />' + this.model.get('title') + '  <span>$' + this.model.get('price') + '</span>');
      //   this.$('input').prop('checked', this.model.get('checked'));
      //   return this;
      // },
      initialize: function(options) {
        this.collection.forEach (function(sModel) {
          var view = new serviceView({model: sModel});
          this.$el.append(view.render().el);
        }.bind(this) );
        // this.collection.each(function(model) {

        //   var sModel = new serviceModel(model);
        //   alert("collectionView init " + JSON.stringify(sModel));

        //   var view = new serviceView({model: sModel});
        //   this.$el.append(view.render().el);
        // }.bind(this));
      }
    });
    return ServicesCollectionView;
})