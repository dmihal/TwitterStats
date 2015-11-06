Meteor.publish("profile", function (screen_name) {
  var profilesSearch = Profiles.find({screenname: screen_name});
  var dataSearch = DataPoints.find({screenname: screen_name});

  var collections = [profilesSearch, dataSearch];
  if (profilesSearch.count() > 0){
    return collections;
  } else {
    TwitterHandler.enqueue(screen_name);
    return collections;
  }
});
