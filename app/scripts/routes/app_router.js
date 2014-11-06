  (function () {

    App.Routers.AppRouter = Backbone.Router.extend({

      initialize: function () {
        // Light the Fire
        Backbone.history.start();
      },

      routes: {
        '' : 'home',
        'edit/:id' : 'editCoffee'
      },

      home: function () {
        new App.Views.AddHero();
        new App.Views.ListHero({ collection: App.heroes });
      },

      editHero: function (id) {

        var h = App.heroes.get(id);

        new App.Views.SingleHero({ hero: h });
      }

    });

  }());
