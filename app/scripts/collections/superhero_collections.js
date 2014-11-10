
    (function () {

      App.Collections.Heroes = Backbone.Collection.extend({
      model: App.Models.Hero,
      comparator: function (model) {
        return -parseInt(model.get('rating'));
      },
      url: 'http://tiy-atl-fe-server.herokuapp.com/collections/superhero'
    });

    }());
