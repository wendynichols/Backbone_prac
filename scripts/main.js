
  (function () {

    App.Models.Hero = Parse.Object.extend({

      className: 'Hero',  //was Superheroes

      idAttribute: 'objectId',

        defaults: {
          title: '',
          power: '',
          alias: '',
          comments: '',
          rating: ''
      },

      initialize: function() {
        var h = this.get('title');
      }

    });

  }());

    (function () {

      App.Collections.Heroes = Parse.Collection.extend({
      model: App.Models.Hero,
      comparator: function (model) {
        return -parseInt(model.get('rating'));
      }
    });

    }());

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

  (function () {

    App.Views.ListHero = Parse.View.extend({

      tagName: 'ul',
      className: 'allHeroes',
      events: {},
      template: _.template($('#listTemp').html()),

      initialize: function (options) {
        this.options = options;
        this.render();
        this.collection.off();
        this.collection.on('sync', this.render, this);

        $('#superheroContainer').html(this.$el);

    },

      render: function () {
        var self = this;
        this.$el.empty();

        if (this.options.sort != undefined) {
          var local_collection = this.collection.sortBy( function (model) {
            return model.get(self.options.sort);
    });

      _.each(local_collection, function (sh) {
          self.$el.append(self.template(sh.toJSON()));
        })
      } else {
        this.collection.sort();
        this.collection.each(function (sh) {
          self.$el.append(self.template(sh.toJSON()));
        });
      }

        if (this.options.showEveryone) {
          $('.infoField h1 a').html('Everyone');
      } else {
          $('.infoField h1 a').html('Super Heroes');
      }

        return this;
      }

    });

  }());

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

  (function () {

    App.Routers.AppRouter = Parse.Router.extend({

      initialize: function () {
        Parse.history.start();
      },

      routes: {
        '' : 'home',
        'edit/:heroID' : 'editHero',
        'add' : 'addHero',
        'sort/:sortby' : 'home'
      },

      home: function (sortby) {
        new App.Views.ListHero({
          collection: App.heroes,
          showEveryone: false,
          sort: sortby
          });
      },

      editHero: function (heroID) {
        var sh = App.heroes.get(heroID);
        new App.Views.SingleHero({ hero: sh });
      },

      addHero: function () {
        new App.Views.AddHero();
      }
    });
  }());

Parse.initialize("Qsvma6Q4shBJOYjZ16ewn66Z5WTXZ6fqGALGxXMK", "2qis94Ka9BC9XYtW5rZPoMvd3sTT8m95bRwEt3sa");


  (function () {

    // Create Instance of Collection
    App.heroes = new App.Collections.Heroes();

    // Fetch any server-side coffees
    App.heroes.fetch().done( function () {

      App.router = new App.Routers.AppRouter();

    });


  }());
