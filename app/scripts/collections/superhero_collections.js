    (function () {

      App.Collections.Heroes = Parse.Collection.extend({
      model: App.Models.Hero,
      comparator: function (model) {
        return -parseInt(model.get('rating'));
      }
    });

    }());
