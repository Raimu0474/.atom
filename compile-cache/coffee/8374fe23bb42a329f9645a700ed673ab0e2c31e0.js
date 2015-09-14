(function() {
  var git, gitAdd;

  git = require('../git');

  gitAdd = function(repo, _arg) {
    var addAll, file, _ref;
    addAll = (_arg != null ? _arg : {}).addAll;
    if (!addAll) {
      file = repo.relativize((_ref = atom.workspace.getActiveTextEditor()) != null ? _ref.getPath() : void 0);
    } else {
      file = null;
    }
    return git.add(repo, {
      file: file
    });
  };

  module.exports = gitAdd;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1wbHVzXFxsaWJcXG1vZGVsc1xcZ2l0LWFkZC5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsV0FBQTs7QUFBQSxFQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsUUFBUixDQUFOLENBQUE7O0FBQUEsRUFFQSxNQUFBLEdBQVMsU0FBQyxJQUFELEVBQU8sSUFBUCxHQUFBO0FBQ1AsUUFBQSxrQkFBQTtBQUFBLElBRGUseUJBQUQsT0FBUyxJQUFSLE1BQ2YsQ0FBQTtBQUFBLElBQUEsSUFBRyxDQUFBLE1BQUg7QUFDRSxNQUFBLElBQUEsR0FBTyxJQUFJLENBQUMsVUFBTCw2REFBb0QsQ0FBRSxPQUF0QyxDQUFBLFVBQWhCLENBQVAsQ0FERjtLQUFBLE1BQUE7QUFHRSxNQUFBLElBQUEsR0FBTyxJQUFQLENBSEY7S0FBQTtXQUtBLEdBQUcsQ0FBQyxHQUFKLENBQVEsSUFBUixFQUFjO0FBQUEsTUFBQSxJQUFBLEVBQU0sSUFBTjtLQUFkLEVBTk87RUFBQSxDQUZULENBQUE7O0FBQUEsRUFVQSxNQUFNLENBQUMsT0FBUCxHQUFpQixNQVZqQixDQUFBO0FBQUEiCn0=

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-plus/lib/models/git-add.coffee
