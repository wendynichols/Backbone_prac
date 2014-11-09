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

        // Get our Element On Our Page
        $('#heroList').html(this.$el);

      },

        render: function () {
        var self = this;

        // Empty out
        this.$el.empty();

        // Sorting On The Fly
        if (this.options.sort != undefined) {
          // Setting up a localized collection to sort by our sort param
          var local_collection = this.collection.sortBy( function (model) {
            return model.get(self.options.sort);
          });
