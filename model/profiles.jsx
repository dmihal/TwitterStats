Profiles = new Mongo.Collection('profiles');
Profiles.helpers({
  getDataPoints(){
    return DataPoints.find({screenname: this.screenname}, {sort: {date: 1}});
  }
});

var profileSchema = new SimpleSchema({
  twitter_id: {
    type: Number,
    label: "User ID from Twitter",
    min: 0
  },
  screenname: {
    type: String,
    label: "The twitter @handle",
    regEx: /^[A-Za-z0-9_]{1,15}$/
  },
  last_updated: {
    type: Date
  }
});
Profiles.attachSchema(profileSchema);
