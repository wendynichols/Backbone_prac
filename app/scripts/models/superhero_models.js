    var Hero = Backbone.Model.extend({

      defaults: {
        title: '',
        power: '',
        type: ''
      },

      idAttribute: '_id',

      initialize: function() {
        var hero = this.get('title');
      }

    });
