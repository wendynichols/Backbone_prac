    var Hero = Backbone.Model.extend({

      defaults: {
        title: '',
        cause: '',
        type: ''
      },

      idAttribute: '_id',

      initialize: function() {
        var hero = this.get('title');
      }

    });
