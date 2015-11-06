DataPoints = new Mongo.Collection('datapoints');

var dataPointSchema = new SimpleSchema({
  screenname: {
  	type: String
  },
  date: {
  	type: Date
  },
  followers: {
  	type: Number,
  	min: 0
  }
});
DataPoints.attachSchema(dataPointSchema);
