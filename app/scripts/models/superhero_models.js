
  (function () {

    App.Models.Hero = Backbone.Model.extend({

      defaults: {
        title: '',
        power: ''
      },

      idAttribute: '_id',

      initialize: function() {
        var hero = this.get('title');
      }

    });

  }());
