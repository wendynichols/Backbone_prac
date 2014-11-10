
  (function () {

    App.Models.Hero = Backbone.Model.extend({

      idAttribute: '_id',
        defaults: {
          title: '',
          power: '',
          comments: '',
          rating: ''
      },

      initialize: function() {
        var hero = this.get('title');
      }

    });

  }());
