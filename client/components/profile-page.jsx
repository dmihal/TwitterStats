ProfilePage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      ready: FlowRouter.subsReady("profile"),
      profile: Profiles.findOne({screenname: this.props.screenname}),
      dataPoints: DataPoints.find({screenname: this.props.screenname}, {sort: {date: 1}}).fetch()
    };
  },

  render: function(){
    var result;
    if (this.data.ready) {
      result = (
          <div>
            <h1>User @{this.props.screenname}</h1>
            <div>
              {this.data.dataPoints.map(function(point){
                var date = moment(point.date).format('MMMM Do YYYY, h:mm:ss a');
                return <div key={point._id}>{point.followers} at {date}</div>;
              })}
            </div>
          </div>
        );
    } else {
      result = (
        <h1>Loading...</h1>
      );
    }
    return result;
  }
});
