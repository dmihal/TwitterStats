FlowRouter.route('/', {
  action: function(params) {
    ReactLayout.render(HomePage);
  }
});
FlowRouter.route('/@:username', {
  action: function(params) {
    ReactLayout.render(UserPage);
  }
});
FlowRouter.notFound = {
  action: function() {
    ReactLayout.render(NotFoundPage);
  }
};
