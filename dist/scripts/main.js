
  (function () {

    App.Models.Hero = Backbone.Model.extend({

      idAttribute: '_id',
        defaults: {
          title: '',
          power: '',
          alias: '',
          comments: '',
          rating: ''
      },

      initialize: function() {
        var hero = this.get('title');
      }

    });

  }());


    (function () {

      App.Collections.Heroes = Backbone.Collection.extend({
      model: App.Models.Hero,
      comparator: function (model) {
        return -parseInt(model.get('rating'));
      },
      url: 'http://tiy-atl-fe-server.herokuapp.com/collections/superhero'
    });

    }());

  (function () {

  App.Views.HeroesView = Backbone.View.extend ({

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

      $('#heroForm').empty();
      $('#heroList').html(this.$el);
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
          rating: $('input[name="rating"]:checked').val()
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

  (function () {

    App.Views.ListHero = Backbone.View.extend({

      tagName: 'ul',
      className: 'allHeroes',
      events: {},
      template: _.template($('#listTemp').html()),

      initialize: function (options) {
        this.options = options;
        this.render();
        this.collection.off();
        this.collection.on('sync', this.render, this);

        $('#heroList').html(this.$el);

    },

      render: function () {
        var self = this;
        this.$el.empty();

        if (this.options.sort != undefined) {
          var local_collection = this.collection.sortBy( function (model) {
            return model.get(self.options.sort);
    });

      _.each(local_collection, function (he) {
          self.$el.append(self.template(he.toJSON()));
        })
      } else {
        this.collection.sort();
        this.collection.each(function (he) {
          self.$el.append(self.template(he.toJSON()));
        });
      }

        if (this.options.showEveryone) {
          $('.infoField h1 a').html('Everyone');

      } else {
          $('.infoField h1 a').html('Superheroes');
      }

        return this;
      }

    });

  }());

  (function () {

    App.Routers.AppRouter = Backbone.Router.extend({

      initialize: function () {
        Backbone.history.start();
      },

      routes: {
        '' : 'home',
        'edit/:id' : 'editHero',
        'add' : 'addHero',
        'sort/:sortby' : 'main'
      },

      main: function (sortby) {
        new App.Views.ListHero({
          collection: App.heroes,
          showEveryone: false,
          sort: sortby
          });
      },

      editHero: function (id) {
        var h = App.heroes.get(id);
        new App.Views.SingleHero({ hero: h });
      },

      addHero: function () {
        new App.Views.AddHero();
      }
    });
  }());


  (function () {

    // Create Instance of Collection
    App.heroes = new App.Collections.Heroes();

    // Fetch any server-side coffees
    App.heroes.fetch().done( function () {

      App.router = new App.Routers.AppRouter();

    });


  }());
