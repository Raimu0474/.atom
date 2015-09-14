(function() {
  var git, gitCheckoutAllFiles, notifier;

  git = require('../git');

  notifier = require('../notifier');

  gitCheckoutAllFiles = function(repo) {
    return git.cmd({
      args: ['checkout', '-f'],
      cwd: repo.getWorkingDirectory(),
      stdout: function(data) {
        notifier.addSuccess("File changes checked out successfully!");
        return git.refresh();
      }
    });
  };

  module.exports = gitCheckoutAllFiles;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1wbHVzXFxsaWJcXG1vZGVsc1xcZ2l0LWNoZWNrb3V0LWFsbC1maWxlcy5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsa0NBQUE7O0FBQUEsRUFBQSxHQUFBLEdBQU0sT0FBQSxDQUFRLFFBQVIsQ0FBTixDQUFBOztBQUFBLEVBQ0EsUUFBQSxHQUFXLE9BQUEsQ0FBUSxhQUFSLENBRFgsQ0FBQTs7QUFBQSxFQUdBLG1CQUFBLEdBQXNCLFNBQUMsSUFBRCxHQUFBO1dBQ3BCLEdBQUcsQ0FBQyxHQUFKLENBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxDQUFDLFVBQUQsRUFBYSxJQUFiLENBQU47QUFBQSxNQUNBLEdBQUEsRUFBSyxJQUFJLENBQUMsbUJBQUwsQ0FBQSxDQURMO0FBQUEsTUFFQSxNQUFBLEVBQVEsU0FBQyxJQUFELEdBQUE7QUFDTixRQUFBLFFBQVEsQ0FBQyxVQUFULENBQW9CLHdDQUFwQixDQUFBLENBQUE7ZUFDQSxHQUFHLENBQUMsT0FBSixDQUFBLEVBRk07TUFBQSxDQUZSO0tBREYsRUFEb0I7RUFBQSxDQUh0QixDQUFBOztBQUFBLEVBV0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsbUJBWGpCLENBQUE7QUFBQSIKfQ==

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-plus/lib/models/git-checkout-all-files.coffee
