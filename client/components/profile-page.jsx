ProfilePage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      ready: FlowRouter.subsReady("profile"),
      profile: Profiles.findOne({screenname: this.props.screenname})
    };
  },
  render: function(){
    var result;
    if (this.data.ready) {
      result = (
          <h1>User @{this.props.screenname}</h1>
        );
    } else {
      result = (
        <h1>Loading...</h1>
      );
    }
    return result;
  }
});
