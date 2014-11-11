Parse.initialize("Qsvma6Q4shBJOYjZ16ewn66Z5WTXZ6fqGALGxXMK", "2qis94Ka9BC9XYtW5rZPoMvd3sTT8m95bRwEt3sa");


  (function () {

    // Create Instance of Collection
    App.heroes = new App.Collections.Heroes();

    // Fetch any server-side coffees
    App.heroes.fetch().done( function () {

      App.router = new App.Routers.AppRouter();

    });


  }());
