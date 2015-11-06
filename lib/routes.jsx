FlowRouter.route('/', {
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <HomePage />
    });
  }
});
FlowRouter.route('/@:username', {
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <UserPage />
    });
  }
});
FlowRouter.notFound = {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <NotFoundPage />
    });
  }
};
