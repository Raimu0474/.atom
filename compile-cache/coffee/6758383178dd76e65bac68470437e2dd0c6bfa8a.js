(function() {
  var RemoteListView, git, gitPull;

  git = require('../git');

  RemoteListView = require('../views/remote-list-view');

  gitPull = function(repo, _arg) {
    var extraArgs, rebase;
    rebase = (_arg != null ? _arg : {}).rebase;
    if (rebase) {
      extraArgs = ['--rebase'];
    }
    return git.cmd({
      args: ['remote'],
      cwd: repo.getWorkingDirectory(),
      stdout: function(data) {
        return new RemoteListView(repo, data, {
          mode: 'pull',
          extraArgs: extraArgs
        });
      }
    });
  };

  module.exports = gitPull;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1wbHVzXFxsaWJcXG1vZGVsc1xcZ2l0LXB1bGwuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLDRCQUFBOztBQUFBLEVBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxRQUFSLENBQU4sQ0FBQTs7QUFBQSxFQUNBLGNBQUEsR0FBaUIsT0FBQSxDQUFRLDJCQUFSLENBRGpCLENBQUE7O0FBQUEsRUFHQSxPQUFBLEdBQVUsU0FBQyxJQUFELEVBQU8sSUFBUCxHQUFBO0FBQ1IsUUFBQSxpQkFBQTtBQUFBLElBRGdCLHlCQUFELE9BQVMsSUFBUixNQUNoQixDQUFBO0FBQUEsSUFBQSxJQUE0QixNQUE1QjtBQUFBLE1BQUEsU0FBQSxHQUFZLENBQUMsVUFBRCxDQUFaLENBQUE7S0FBQTtXQUVBLEdBQUcsQ0FBQyxHQUFKLENBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxDQUFDLFFBQUQsQ0FBTjtBQUFBLE1BQ0EsR0FBQSxFQUFLLElBQUksQ0FBQyxtQkFBTCxDQUFBLENBREw7QUFBQSxNQUVBLE1BQUEsRUFBUSxTQUFDLElBQUQsR0FBQTtlQUFjLElBQUEsY0FBQSxDQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkI7QUFBQSxVQUFBLElBQUEsRUFBTSxNQUFOO0FBQUEsVUFBYyxTQUFBLEVBQVcsU0FBekI7U0FBM0IsRUFBZDtNQUFBLENBRlI7S0FERixFQUhRO0VBQUEsQ0FIVixDQUFBOztBQUFBLEVBV0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FYakIsQ0FBQTtBQUFBIgp9

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-plus/lib/models/git-pull.coffee
