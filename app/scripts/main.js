
  (function () {

    // Create Instance of Collection
    App.heroes = new App.Collections.Heroes();

    // Fetch any server-side coffees
    App.heroes.fetch().done( function () {

      App.router = new App.Routers.AppRouter();

    });


  }());
