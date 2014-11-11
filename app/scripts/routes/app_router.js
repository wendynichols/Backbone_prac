  (function () {

    App.Routers.AppRouter = Parse.Router.extend({

      initialize: function () {
        Parse.history.start();
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

      editHero: function (heroID) {
        var h = App.heroes.get(heroID);
        new App.Views.SingleHero({ hero: h });
      },

      addHero: function () {
        new App.Views.AddHero();
      }
    });
  }());
