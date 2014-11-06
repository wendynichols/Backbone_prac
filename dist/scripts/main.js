
  (function () {

    App.Models.Hero = Backbone.Model.extend({

      defaults: {
        title: '',
        power: '',
        type: ''
      },

      idAttribute: '_id',

      initialize: function() {
        var hero = this.get('title');
      }

    });

  }());


    (function () {

      App.Collections.Heroes = Backbone.Collection.extend({
      model: App.Models.Hero,
      url: 'http://tiy-atl-fe-server.herokuapp.com/collections/superhero'
    });

    }());

  (function () {

  App.Views.HeroesView = Backbone.View.extend ({

      tagName: 'ul',
      className: 'hero',

      events: {
        'click li' : 'deleteMyHero'
      },

      initialize: function () {
        this.render();  //we've made the data available

        App.all_heroes.on('sync', this.render, this);
        App.all_heroes.on('destroy', this.render, this);

        $('#superheroContainer').html(this.el);

      },

      render: function () {
          //Binding 'this' to 'self' for use in nested
          // functions/callbacks
        var self = this;


          // Straight up underscore template goodness
        var template = $('#hero').html();
        var rendered = _.template(template);


        this.$el.empty();

          // Iterating over our models
        _.each(App.all_heroes.models, function (c) {

            // Each iteration...appending the data to
            //    our element that Backbone created
          self.$el.append(rendered(c.attributes));
        });


        return this;

      },

        deleteMyHero: function (e) {
          e.preventDefault();

        var id = $(e.target).attr('id');
        var goodbye = App.all_heroes.get(id);
          goodbye.destroy();
        }
    });
  }());

(function () {

    App.Views.HeroesAdd = Backbone.View.extend({
      el: '#heroesAdder',  //from new div in index.html

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
        var heroes_type = $('#type').val();

          // Create new Feeling
        var hero = new App.Models.Hero({
          title: heroes_title,
          power: heroes_power,
          type: heroes_type
        });

          // Add to our Collection and save to the server
        App.all_heroes.add(hero).save();

          // Clear my form
        $('#heroesAdd')[0].reset();

      }


    });

  }());

  (function () {

    App.Routers.AppRouter = Backbone.Router.extend({

      initialize: function () {
        // Light the Fire
        Backbone.history.start();
      },

      routes: {
        '' : 'home',
        'edit/:id' : 'editCoffee'
      },

      home: function () {
        new App.Views.AddHero();
        new App.Views.ListHero({ collection: App.heroes });
      },

      editHero: function (id) {

        var h = App.heroes.get(id);

        new App.Views.SingleHero({ hero: h });
      }

    });

  }());


    (function () {

      new App.Views.HeroesAdd();

      // Create instance of Feeling Collection
    App.all_heroes = new App.Collections.Heroes();


      // Pull our feelingsfrom our server
    App.all_heroes.fetch().done( function() {
      new App.Views.HeroesView
      });

    }());
