
  (function () {

    App.Models.Hero = Parse.Object.extend({

      className: 'Hero',  //was Superheroes

      idAttribute: 'objectId',

        defaults: {
          title: '',
          power: '',
          alias: '',
          comments: '',
          rating: ''
      },

      initialize: function() {
        var h = this.get('title');
      }

    });

  }());
