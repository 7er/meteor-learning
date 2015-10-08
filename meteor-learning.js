Counters = new Mongo.Collection("counters")

function counter() {
    return Counters.findOne({_id: "semsket"}).a;
}

function updateCounter() {
    Counters.update(
        {_id: "semsket"},
        {$inc: {a: 2}});
}

function initCounter() {
    counterOrNull = Counters.findOne({_id: "semsket"});
    if (!counterOrNull) {
        Counters.insert({_id: "semsket", a: 0});
    }
}

if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

    Template.hello.helpers({
      counter: counter
    });

    Template.hello.events({
        // increment the counter when button is clicked       
        'click button': updateCounter
    });
}

if (Meteor.isServer) {
    Meteor.startup(initCounter);
}
