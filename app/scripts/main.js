var Student = Backbone.Model.extend ({    // Model

      defaults: {     //pass in an object literal, don't forget the commas
        name: '',
        location: 'Atlanta',
        awesome: true
      },


      initialize: function () {
        var n = this.get('name');
        console.log(n + ' has been added!')
      }

    });

    var Students = Backbone.Collection.extend ({    // Collection
      model: Student,
      url: 'http://tiy-atl-fe-server.herokuapp.com/collections/wendybackbone'
    });

    var all_students = new Students();      // Instance of the Collection s


    $('#studentForm').on('submit', function () {

        // Prevent the default action of our form submission
      e.preventDefault();

        // Grab the name from the input
      var student_name = $('#name').val;

        // Create a new instance of our Student constructor (Backbone.model)
      var s = new Student({
        name: student_name
      });


        //Access out Collecton and add our new instance (Student) to our collection
      all_students.add(s);

        //Save our Student - this looks for a URL field or a URL field in our collection
          // and saves it to that URL using a simple POST method
      s.save();
      console.log(s);

        // Clear my form
      $(this)[0].reset();

    });
