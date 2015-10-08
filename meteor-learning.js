Counters = new Mongo.Collection("counters")


if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Counters.findOne({_id: "semsket"}).a;
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
        Counters.update(
            {_id: "semsket"},
            {$inc: {a: 2}});
    }
  });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        counterOrNull = Counters.findOne({_id: "semsket"});
        if (!counterOrNull) {
            Counters.insert({_id: "semsket", a: 0});
        }
  });
}
