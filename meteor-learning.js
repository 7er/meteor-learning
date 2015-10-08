Counters = new Mongo.Collection("counters")

if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Counters.findOne({ _id: 'jSh2HhsKbpAmociDY'}).a;
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
        Counters.update(
            { _id: 'jSh2HhsKbpAmociDY'},
            {$inc: {a: 2}});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
