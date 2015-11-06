Meteor.publish("profile", function (screen_name) {
  return Profiles.find({screen_name: screen_name});
});
