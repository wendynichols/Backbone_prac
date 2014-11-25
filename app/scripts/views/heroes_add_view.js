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

          // Create new Feeling
        var sh = new App.Models.Hero({
          title: $('#heroes_title').val(),
          power: $('#heroes_power').val(),
          alias: $('#heroes_alias').val()
        });

          // Add to our Collection and save to the server
        sh.save(null, {
          success: function (sh) {
            App.router.navigate('', { trigger: true });
          }
        });

      }

    });

  }());
