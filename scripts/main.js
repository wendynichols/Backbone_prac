    var Feeling = Backbone.Model.extend({

      defaults: {
        title: '',
        cause: '',
        type: ''
      },

      idAttribute: '_id',

      initialize: function() {
        var feel = this.get('title');
      }

    });

      var Feelings = Backbone.Collection.extend({
      model: Feeling,
      url: 'http://tiy-atl-fe-server.herokuapp.com/collections/backbonesecondpractice'
    });

  var FeelingsView = Backbone.View.extend ({

      tagName: 'ul',
      className: 'feels',

      initialize: function (options) {
        this.render(options.collection);  //we've made the data available
      },

      render: function (collection) {
          //Binding 'this' to 'self' for use in nested
          // functions/callbacks
        var self = this;


          // Straight up underscore template goodness
        var template = $('#feels').html();
        var rendered = _.template(template);

          // Iterating over our models
        _.each(collection.models, function (c) {

            // Each iteration...appending the data to
            //    our element tht Backbone created
          self.$el.append(rendered(c.attributes));
        });


            // Take the data and append it into a
            // specific element on my page
        $('#feelsContainer').html(this.el);


        return this;

      }


    });


      // Create instance of Feeling Collection
    var all_feelings = new Feelings();


      // Pull our feelingsfrom our server
    all_feelings.fetch().done( function() {
      var feelsview = new FeelingsView({
        collection: all_feelings
      });

    });
