Counters = new Mongo.Collection("counters")

function counter(_id) {
    return Counters.findOne({_id: _id}).a;
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

Router.route('/:_id', {
    template: 'hello',
    data: function() {
        return { counter: counter(this.params._id) };
    }
});

if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

    Template.hello.events({
        // increment the counter when button is clicked       
        'click button': updateCounter
    });
}

if (Meteor.isServer) {
    Meteor.startup(initCounter);
}
