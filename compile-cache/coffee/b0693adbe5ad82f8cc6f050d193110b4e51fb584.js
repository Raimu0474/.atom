(function() {
  var GitCommit, git, gitAddAllAndCommit;

  git = require('../git');

  GitCommit = require('./git-commit');

  gitAddAllAndCommit = function(repo) {
    return git.add(repo, {
      exit: function() {
        return new GitCommit(repo);
      }
    });
  };

  module.exports = gitAddAllAndCommit;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1wbHVzXFxsaWJcXG1vZGVsc1xcZ2l0LWFkZC1hbGwtYW5kLWNvbW1pdC5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsa0NBQUE7O0FBQUEsRUFBQSxHQUFBLEdBQU0sT0FBQSxDQUFRLFFBQVIsQ0FBTixDQUFBOztBQUFBLEVBQ0EsU0FBQSxHQUFZLE9BQUEsQ0FBUSxjQUFSLENBRFosQ0FBQTs7QUFBQSxFQUdBLGtCQUFBLEdBQXFCLFNBQUMsSUFBRCxHQUFBO1dBQ25CLEdBQUcsQ0FBQyxHQUFKLENBQVEsSUFBUixFQUNFO0FBQUEsTUFBQSxJQUFBLEVBQU0sU0FBQSxHQUFBO2VBQU8sSUFBQSxTQUFBLENBQVUsSUFBVixFQUFQO01BQUEsQ0FBTjtLQURGLEVBRG1CO0VBQUEsQ0FIckIsQ0FBQTs7QUFBQSxFQU9BLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLGtCQVBqQixDQUFBO0FBQUEiCn0=

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-plus/lib/models/git-add-all-and-commit.coffee
