  (function () {

    App.Routers.AppRouter = Backbone.Router.extend({

      initialize: function () {
        Backbone.history.start();
      },

      routes: {
        '' : 'home',
        'edit/:id' : 'editHero',
        'add' : 'addHero',
        'sort/:sortby' : 'main'
      },

      home: function (sortby) {
        new App.Views.ListHero({
          collection: App.heroes,
          showEveryone: false,
          sort: sortby
          });
      },

      editHero: function (id) {
        var h = App.heroes.get(id);
        new App.Views.SingleHero({ hero: h });
      },

      addHero: function () {
        new App.Views.AddHero();
      }
    });
  }());
