Meteor.publish("profile", function (screen_name) {
  var profilesSearch = Profiles.find({screenname: screen_name});
  var dataSearch = DataPoints.find({screenname: screen_name});

  var collections = [profilesSearch, dataSearch];
  if (profilesSearch.count() == 0 || dataSearch.count() == 0){
    TwitterHandler.enqueue(screen_name);
  } else {
    var recentDP = DataPoints.findOne({screenname: screen_name}, {sort: {date: -1}});
    var diff = moment().diff(moment(recentDP.date), 'minutes');
    console.log("Difference of", diff, "minutes");
    if (diff > 30){
      TwitterHandler.enqueue(screen_name);
    }
  }
  return collections;
});
