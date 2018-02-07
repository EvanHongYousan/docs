function Publisher() {
    this.topics = {};
    this.subUid = -1;
}

Publisher.prototype.publish = function (topic, args) {

    if (!this.topics[topic]) {
        return false;
    }

    var subscribers = this.topics[topic],
        len = subscribers ? subscribers.length : 0;

    while (len--) {
        subscribers[len].func(topic, args);
    }

    return this;
};

Publisher.prototype.subscribe = function (topic, func) {

    if (!this.topics[topic]) {
        this.topics[topic] = [];
    }

    var token = (++this.subUid).toString();
    this.topics[topic].push({
        token: token,
        func: func
    });
    return token;
};

Publisher.prototype.unsubscribe = function (token) {
    for (var m in this.topics) {
        if (this.topics[m]) {
            for (var i = 0, j = this.topics[m].length; i < j; i++) {
                if (this.topics[m][i].token === token) {
                    this.topics[m].splice(i, 1);
                    return token;
                }
            }
        }
    }
    return this;
};

var Subscriber = function (name) {
    this.name = name;
}

Subscriber.prototype.log = function (topic, message) {
    console.log('I am ' + this.name + ', I receive message from ' + topic + ', the message is: ' + message);
}

var publisher = new Publisher();

var subscriber1 = new Subscriber('subscriber1');
var subscriber2 = new Subscriber('subscriber2');
var subscriber3 = new Subscriber('subscriber3');
var subscriber4 = new Subscriber('subscriber4');
var subscriber5 = new Subscriber('subscriber5');

publisher.subscribe('channer1', subscriber1.log.bind(subscriber1));
publisher.subscribe('channer2', subscriber2.log.bind(subscriber2));
publisher.subscribe('channer3', subscriber3.log.bind(subscriber3));
publisher.subscribe('channer1', subscriber4.log.bind(subscriber4));
publisher.subscribe('channer1', subscriber5.log.bind(subscriber5));

publisher.publish('channer1', 'channer1 is big');
publisher.publish('channer2', 'channer2 is not big');
publisher.publish('channer3', 'channer3 is small');