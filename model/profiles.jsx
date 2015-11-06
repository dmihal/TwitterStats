Profiles = new Mongo.Collection('profiles');

var profileSchema = new SimpleSchema({
  twitter_id: {
    type: Number,
    label: "User ID from Twitter",
    min: 0
  },
  screen_name: {
    type: String,
    label: "The twitter @handle",
    regEx: /^[A-Za-z0-9_]{1,15}$/
  },
  last_updated: {
    type: Date
  }
});
