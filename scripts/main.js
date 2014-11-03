var Sister = Backbone.Model.extend ({    // Model

      defaults: {     //pass in an object literal, don't forget the commas
        name: '',
        location: 'Washington',
        awesome: true
      },


      initialize: function () {
        var n = this.get('name');
        console.log(n + ' is part of the Family!')
      }

    });

    var Sisters = Backbone.Collection.extend ({    // Collection
      model: Sister,
      url: 'http://tiy-atl-fe-server.herokuapp.com/collections/wendybackbone'
    });

    var all_sisters = new Students();      // Instance of the Collection s


    $('#studentForm').on('submit', function () {

        // Prevent the default action of our form submission
      e.preventDefault();

        // Grab the name from the input
      var sister_name = $('#name').val;

        // Create a new instance of our Sister constructor (Backbone.model)
      var s = new Sister({
        name: sister_name
      });


        //Access out Collecton and add our new instance (Sister) to our collection
      all_sisters.add(s);

        //Save our Sister - this looks for a URL field or a URL field in our collection
          // and saves it to that URL using a simple POST method
      s.save();
      console.log(s);

        // Clear my form
      $(this)[0].reset();

    });
