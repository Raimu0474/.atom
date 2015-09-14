(function() {
  var SelectUnstageFiles, git, gitUnstageFiles;

  git = require('../git');

  SelectUnstageFiles = require('../views/select-unstage-files-view');

  gitUnstageFiles = function(repo) {
    return git.stagedFiles(repo, function(data) {
      return new SelectUnstageFiles(repo, data);
    });
  };

  module.exports = gitUnstageFiles;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1wbHVzXFxsaWJcXG1vZGVsc1xcZ2l0LXVuc3RhZ2UtZmlsZXMuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLHdDQUFBOztBQUFBLEVBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxRQUFSLENBQU4sQ0FBQTs7QUFBQSxFQUNBLGtCQUFBLEdBQXFCLE9BQUEsQ0FBUSxvQ0FBUixDQURyQixDQUFBOztBQUFBLEVBR0EsZUFBQSxHQUFrQixTQUFDLElBQUQsR0FBQTtXQUNoQixHQUFHLENBQUMsV0FBSixDQUFnQixJQUFoQixFQUFzQixTQUFDLElBQUQsR0FBQTthQUFjLElBQUEsa0JBQUEsQ0FBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBZDtJQUFBLENBQXRCLEVBRGdCO0VBQUEsQ0FIbEIsQ0FBQTs7QUFBQSxFQU1BLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLGVBTmpCLENBQUE7QUFBQSIKfQ==

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-plus/lib/models/git-unstage-files.coffee
