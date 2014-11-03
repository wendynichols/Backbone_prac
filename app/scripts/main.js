
      // Create instance of Feeling Collection
    var all_heroes = new Heroes();


      // Pull our feelingsfrom our server
    all_heroes.fetch().done( function() {
      var heroesview = new HeroesView({
        collection: all_heroes
      });

    });
