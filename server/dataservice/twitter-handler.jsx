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
      Profiles.update({screen_name: screenname}, {
        twitter_id: result.profile.id,
        screen_name: screenname,
        last_updated: new Date()
      }, {upsert: true});
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
