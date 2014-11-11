(function () {

    App.Views.AddHero = Parse.View.extend({

      events: {
        'submit #heroesAdd' : 'addHero'
      },


      initialize: function () {
        this.render();
        $('#superheroContainer').html(this.$el);
      },

      render: function () {
        this.$el.html($('#addHeroes').html());
      },

        //Custom created elements after initialize and render
      addHero: function (e) {
        e.preventDefault();

        //console.log('hey');

          // Create new Feeling
        var h = new App.Models.Hero({
          title: $('#heroes_title').val(),
          power: $('#heroes_power').val(),
          alias: $('#heroes_alias').val()
        });

          // Add to our Collection and save to the server
        App.heroes.add(h).save(null, {
          success: function () {
            App.router.navigate('', { trigger: true });
          }
        });

      }

    });

  }());
