(function() {
  var SelectStageHunkFile, git, gitStageHunk;

  git = require('../git');

  SelectStageHunkFile = require('../views/select-stage-hunk-file-view');

  gitStageHunk = function(repo) {
    return git.unstagedFiles(repo, null, function(data) {
      return new SelectStageHunkFile(repo, data);
    });
  };

  module.exports = gitStageHunk;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1wbHVzXFxsaWJcXG1vZGVsc1xcZ2l0LXN0YWdlLWh1bmsuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLHNDQUFBOztBQUFBLEVBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxRQUFSLENBQU4sQ0FBQTs7QUFBQSxFQUNBLG1CQUFBLEdBQXNCLE9BQUEsQ0FBUSxzQ0FBUixDQUR0QixDQUFBOztBQUFBLEVBR0EsWUFBQSxHQUFlLFNBQUMsSUFBRCxHQUFBO1dBQ2IsR0FBRyxDQUFDLGFBQUosQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFDRSxTQUFDLElBQUQsR0FBQTthQUFjLElBQUEsbUJBQUEsQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsRUFBZDtJQUFBLENBREYsRUFEYTtFQUFBLENBSGYsQ0FBQTs7QUFBQSxFQVFBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFlBUmpCLENBQUE7QUFBQSIKfQ==

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-plus/lib/models/git-stage-hunk.coffee
