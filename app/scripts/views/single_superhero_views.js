  (function () {

  App.Views.SingleHero = Parse.View.extend ({

      tagName: 'ul',
      className: 'heroSingle',

      events: {
        'submit #updateHero' : 'updateHero',
        'click #delete' : 'deleteHero'
      },

      template: _.template($('#singleTemp').html()),

      initialize: function (options) {
        this.options = options;
        this.render();

      //$('#heroForm').empty();
      $('#superheroContainer').html(this.$el);
    },

      render: function () {
        this.$el.empty();
        this.$el.html(this.template(this.options.hero.toJSON()));

    },


       updateHero: function (e) {
        e.preventDefault();
        this.options.hero.set({
          title: $('#update_title').val(),
          power: $('#update_power').val(),
          alias: $('#update_alias').val(),
          rating: $('input[title="rating"]:checked').val()
      });

        this.options.hero.save();
        App.router.navigate('', {trigger: true});

      },

        deleteHero: function (e) {
          e.preventDefault();
          this.options.hero.destroy();

        App.router.navigate('', {trigger: true});

      }

    });

  }());
