  (function () {

    App.Routers.AppRouter = Parse.Router.extend({

      initialize: function () {
        Parse.history.start();
      },

      routes: {
        '' : 'home',
        'edit/:heroID' : 'editHero',
        'add' : 'addHero',
        'sort/:sortby' : 'home'
      },

      home: function (sortby) {
        new App.Views.ListHero({
          collection: App.heroes,
          showEveryone: false,
          sort: sortby
          });
      },

      editHero: function (heroID) {
        var sh = App.heroes.get(heroID);
        new App.Views.SingleHero({ hero: sh });
      },

      addHero: function () {
        new App.Views.AddHero();
      }
    });
  }());
