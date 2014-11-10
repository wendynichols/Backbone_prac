(function () {

    App.Views.HeroesAdd = Backbone.View.extend({

      events: {
        'submit #heroesAdd' : 'addNewHero'   //A delegated event, has to be inside of our view element
      },


      initialize: function () {
        this.render();
      },

      render: function () {
        this.$el.html($('#addHeroes').html());
      },

        //Custom created elements after initialize and render
      addNewHero: function (e) {
        e.preventDefault();

          // Grab feel values from my form
        var heroes_title = $('#title').val();
        var heroes_power = $('#power').val();
        var heroes_alias = $('#alias').val();

          // Create new Feeling
        var hero = new App.Models.Hero({
          title: heroes_title,
          power: heroes_power,
          alias: heroes_alias,
        });

          // Add to our Collection and save to the server
        App.all_heroes.add(hero).save();

          // Clear my form
        $('#heroesAdd')[0].reset();

      }


    });

  }());
