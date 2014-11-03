
      // Create instance of Feeling Collection
    var all_heros = new Heros();


      // Pull our feelingsfrom our server
    all_heros.fetch().done( function() {
      var herosview = new HerosView({
        collection: all_heros
      });

    });
