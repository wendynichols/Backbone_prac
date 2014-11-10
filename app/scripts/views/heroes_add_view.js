(function () {

    App.Views.AddHero = Backbone.View.extend({

      events: {
        'submit #addHero' : 'addHero'
      },


      initialize: function () {
        this.render();
        $('#heroList').html(this.$el);
      },

      render: function () {
        this.$el.html($('#addHeroes').html());
      },

        //Custom created elements after initialize and render
      addHero: function (e) {
        e.preventDefault();

          // Create new Feeling
        var he = new App.Models.Hero({
          title: $('#heroes_title').val(),
          power: $('#heroes_power').val(),
          alias: $('#heroes_alias').val()
        });


          // Add to our Collection and save to the server
        App.heroes.add(he).save(null, {
          success: function () {
            App.router.navigate('', { trigger: true });
          }
        });

      }

    });

  }());
