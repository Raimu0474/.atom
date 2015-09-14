(function() {
  var ListView, git, gitDeleteRemoteBranch;

  git = require('../git');

  ListView = require('../views/delete-branch-view');

  gitDeleteRemoteBranch = function(repo) {
    return git.cmd({
      args: ['branch', '-r'],
      cwd: repo.getWorkingDirectory(),
      stdout: function(data) {
        return new ListView(repo, data.toString(), {
          isRemote: true
        });
      }
    });
  };

  module.exports = gitDeleteRemoteBranch;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1wbHVzXFxsaWJcXG1vZGVsc1xcZ2l0LWRlbGV0ZS1yZW1vdGUtYnJhbmNoLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxvQ0FBQTs7QUFBQSxFQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsUUFBUixDQUFOLENBQUE7O0FBQUEsRUFDQSxRQUFBLEdBQVcsT0FBQSxDQUFRLDZCQUFSLENBRFgsQ0FBQTs7QUFBQSxFQUdBLHFCQUFBLEdBQXdCLFNBQUMsSUFBRCxHQUFBO1dBQ3RCLEdBQUcsQ0FBQyxHQUFKLENBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxDQUFDLFFBQUQsRUFBVyxJQUFYLENBQU47QUFBQSxNQUNBLEdBQUEsRUFBSyxJQUFJLENBQUMsbUJBQUwsQ0FBQSxDQURMO0FBQUEsTUFFQSxNQUFBLEVBQVEsU0FBQyxJQUFELEdBQUE7ZUFDRixJQUFBLFFBQUEsQ0FBUyxJQUFULEVBQWUsSUFBSSxDQUFDLFFBQUwsQ0FBQSxDQUFmLEVBQWdDO0FBQUEsVUFBQSxRQUFBLEVBQVUsSUFBVjtTQUFoQyxFQURFO01BQUEsQ0FGUjtLQURGLEVBRHNCO0VBQUEsQ0FIeEIsQ0FBQTs7QUFBQSxFQVVBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLHFCQVZqQixDQUFBO0FBQUEiCn0=

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-plus/lib/models/git-delete-remote-branch.coffee
