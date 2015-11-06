TwitterSource = {
  getCurrentFollowers(screenname){
    data = twitterGetSync('users/show', { screen_name: screenname });  
    return {
      success: true,
      profile: {
        id: data.id,
        name: data.name,
        screenname: data.screen_name,
        followers: data.followers_count,
        created: moment(Date.parse(data.created_at))
      }
    };
  }
};

var twitter = new TwitMaker(Meteor.settings.twitter);
var twitterGetSync = Meteor.wrapAsync(twitter.get, twitter);
