
    (function () {

      new App.Views.HeroesAdd();

      // Create instance of Feeling Collection
    App.all_heroes = new App.Collections.Heroes();


      // Pull our feelingsfrom our server
    App.all_heroes.fetch().done( function() {
      new App.Views.HeroesView
      });

    }());
