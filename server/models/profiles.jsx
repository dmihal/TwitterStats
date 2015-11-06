Meteor.publish("profile", function (screen_name) {
  var profilesSearch = Profiles.find({screen_name: screen_name});
  if (profilesSearch.count() > 0){
    return profilesSearch;
  } else {
    TwitterHandler.enqueue(screen_name);
    return profilesSearch;
  }
});
