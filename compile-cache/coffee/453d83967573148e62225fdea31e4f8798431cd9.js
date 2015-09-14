(function() {
  var ListView, git, gitFetch;

  git = require('../git');

  ListView = require('../views/remote-list-view');

  gitFetch = function(repo) {
    return git.cmd({
      args: ['remote'],
      cwd: repo.getWorkingDirectory(),
      stdout: function(data) {
        return new ListView(repo, data.toString(), {
          mode: 'fetch-prune'
        });
      }
    });
  };

  module.exports = gitFetch;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1wbHVzXFxsaWJcXG1vZGVsc1xcZ2l0LWZldGNoLXBydW5lLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSx1QkFBQTs7QUFBQSxFQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsUUFBUixDQUFOLENBQUE7O0FBQUEsRUFDQSxRQUFBLEdBQVcsT0FBQSxDQUFRLDJCQUFSLENBRFgsQ0FBQTs7QUFBQSxFQUdBLFFBQUEsR0FBVyxTQUFDLElBQUQsR0FBQTtXQUNULEdBQUcsQ0FBQyxHQUFKLENBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxDQUFDLFFBQUQsQ0FBTjtBQUFBLE1BQ0EsR0FBQSxFQUFLLElBQUksQ0FBQyxtQkFBTCxDQUFBLENBREw7QUFBQSxNQUVBLE1BQUEsRUFBUSxTQUFDLElBQUQsR0FBQTtlQUFjLElBQUEsUUFBQSxDQUFTLElBQVQsRUFBZSxJQUFJLENBQUMsUUFBTCxDQUFBLENBQWYsRUFBZ0M7QUFBQSxVQUFBLElBQUEsRUFBTSxhQUFOO1NBQWhDLEVBQWQ7TUFBQSxDQUZSO0tBREYsRUFEUztFQUFBLENBSFgsQ0FBQTs7QUFBQSxFQVNBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFFBVGpCLENBQUE7QUFBQSIKfQ==

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-plus/lib/models/git-fetch-prune.coffee
