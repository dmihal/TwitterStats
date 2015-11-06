TwitterHandler = {
  enqueue(screenname){
    DataQueue.add({
      type: 'twitter',
      screenname: screenname
    });
  },
  handleQueueItem(item){
    result = TwitterSource.getCurrentFollowers(item.screenname);
    if (result.success){
      var screenname = result.profile.screenname.toLowerCase();
      Profiles.update({screenname: screenname}, {
        $set: {
          twitter_id: result.profile.id,
          screenname: screenname,
          last_updated: new Date()
        }
      }, {upsert: true});
      DataPoints.insert({
        screenname: screenname,
        followers: result.profile.followers,
        date: new Date()
      })
      console.log(screenname, 'current followers:', result.profile.followers);
    }
  }
};

Meteor.setInterval(function(){
  var item = DataQueue.pop('twitter');
  if (item){
    TwitterHandler.handleQueueItem(item);
  }
}, 10 * 1000);
