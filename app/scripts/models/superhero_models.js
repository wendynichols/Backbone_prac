
  (function () {

    App.Models.Hero = Backbone.Model.extend({

      defaults: {
        title: '',
        power: '',
        comments: '',
        rating: ''
      },

      idAttribute: '_id',

      initialize: function() {
        var hero = this.get('title');
      }

    });

  }());
