FlowRouter.route('/', {
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <HomePage />
    });
  }
});
FlowRouter.route('/@:screenname', {
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <ProfilePage screenname={params.screenname} />
    });
  },
  subscriptions: function(params) {
    this.register('profile', Meteor.subscribe('profile', params.screenname));
  },
});
FlowRouter.notFound = {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <NotFoundPage />
    });
  }
};
