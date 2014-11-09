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
