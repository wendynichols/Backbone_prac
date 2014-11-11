
  (function () {

    App.Models.Hero = Parse.Object.extend({

      className: 'Superheroes',

      idAttribute: 'objectId',
      
        defaults: {
          title: '',
          power: '',
          alias: '',
          comments: '',
          rating: ''
      },

      initialize: function() {
        var hero = this.get('title');
      }

    });

  }());
