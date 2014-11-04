
    (function () {

      App.Collections.Heroes = Backbone.Collection.extend({
      model: App.Models.Hero,
      url: 'http://tiy-atl-fe-server.herokuapp.com/collections/superhero'
    });

    }());
