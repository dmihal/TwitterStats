DataQueue = {
  add(item) {
    item.queued = new Date();
    queue.insert(item);
  },
  pop(type) {
    var item = queue.findOne({type: type}, {sort: {queued: 1}});
    if (item){
      console.log("Popping item", item);
      queue.remove(item._id);
    }
    return item;
  }
};

var queue = new Mongo.Collection('queue');

var queueSchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: [
      'twitter'
    ]
  },
  screenname: {
    type: String
  },
  queued: {
    type: Date
  }
});
queue.attachSchema(queueSchema);
