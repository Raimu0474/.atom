(function() {
  var StatusListView, git, gitStatus;

  git = require('../git');

  StatusListView = require('../views/status-list-view');

  gitStatus = function(repo) {
    return git.status(repo, function(data) {
      return new StatusListView(repo, data);
    });
  };

  module.exports = gitStatus;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1wbHVzXFxsaWJcXG1vZGVsc1xcZ2l0LXN0YXR1cy5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsOEJBQUE7O0FBQUEsRUFBQSxHQUFBLEdBQU0sT0FBQSxDQUFRLFFBQVIsQ0FBTixDQUFBOztBQUFBLEVBQ0EsY0FBQSxHQUFpQixPQUFBLENBQVEsMkJBQVIsQ0FEakIsQ0FBQTs7QUFBQSxFQUdBLFNBQUEsR0FBWSxTQUFDLElBQUQsR0FBQTtXQUNWLEdBQUcsQ0FBQyxNQUFKLENBQVcsSUFBWCxFQUFpQixTQUFDLElBQUQsR0FBQTthQUFjLElBQUEsY0FBQSxDQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBZDtJQUFBLENBQWpCLEVBRFU7RUFBQSxDQUhaLENBQUE7O0FBQUEsRUFNQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQU5qQixDQUFBO0FBQUEiCn0=

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-plus/lib/models/git-status.coffee
