(function() {
  var GitCommit, git, gitAddAllCommitAndPush;

  git = require('../git');

  GitCommit = require('./git-commit');

  gitAddAllCommitAndPush = function(repo) {
    return git.add(repo, {
      file: null,
      exit: function() {
        return new GitCommit(repo, {
          andPush: true
        });
      }
    });
  };

  module.exports = gitAddAllCommitAndPush;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1wbHVzXFxsaWJcXG1vZGVsc1xcZ2l0LWFkZC1hbGwtY29tbWl0LWFuZC1wdXNoLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSxzQ0FBQTs7QUFBQSxFQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsUUFBUixDQUFOLENBQUE7O0FBQUEsRUFDQSxTQUFBLEdBQVksT0FBQSxDQUFRLGNBQVIsQ0FEWixDQUFBOztBQUFBLEVBR0Esc0JBQUEsR0FBeUIsU0FBQyxJQUFELEdBQUE7V0FDdkIsR0FBRyxDQUFDLEdBQUosQ0FBUSxJQUFSLEVBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxJQUFOO0FBQUEsTUFDQSxJQUFBLEVBQU0sU0FBQSxHQUFBO2VBQ0EsSUFBQSxTQUFBLENBQVUsSUFBVixFQUFnQjtBQUFBLFVBQUEsT0FBQSxFQUFTLElBQVQ7U0FBaEIsRUFEQTtNQUFBLENBRE47S0FERixFQUR1QjtFQUFBLENBSHpCLENBQUE7O0FBQUEsRUFTQSxNQUFNLENBQUMsT0FBUCxHQUFpQixzQkFUakIsQ0FBQTtBQUFBIgp9

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-plus/lib/models/git-add-all-commit-and-push.coffee
