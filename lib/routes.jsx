FlowRouter.route('/', {
  action: function(params) {
    ReactLayout.render(HomePage);
  }
});
FlowRouter.notFound = {
  action: function() {
    ReactLayout.render(NotFoundPage);
  }
};
