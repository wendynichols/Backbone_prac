  var HerosView = Backbone.View.extend ({

      tagName: 'ul',
      className: 'hero',

      initialize: function (options) {
        this.render(options.collection);  //we've made the data available
      },

      render: function (collection) {
          //Binding 'this' to 'self' for use in nested
          // functions/callbacks
        var self = this;


          // Straight up underscore template goodness
        var template = $('#hero').html();
        var rendered = _.template(template);

          // Iterating over our models
        _.each(collection.models, function (c) {

            // Each iteration...appending the data to
            //    our element tht Backbone created
          self.$el.append(rendered(c.attributes));
        });


            // Take the data and append it into a
            // specific element on my page
        $('#superheroContainer').html(this.el);

        return this;

      }

    });
