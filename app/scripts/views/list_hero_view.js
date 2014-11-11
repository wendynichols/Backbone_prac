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

      _.each(local_collection, function (h) {
          self.$el.append(self.template(he.toJSON()));
        })
      } else {
        this.collection.sort();
        this.collection.each(function (h) {
          self.$el.append(self.template(h.toJSON()));
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
