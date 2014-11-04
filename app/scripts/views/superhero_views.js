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
            //    our element tht Backbone created
          self.$el.append(rendered(c.attributes));
        });


            // Take the data and append it into a
            // specific element on my page
        $('#superheroContainer').html(this.el);

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
