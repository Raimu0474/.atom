(function() {
  var GitCloneLoadingView, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('space-pen').View;

  module.exports = GitCloneLoadingView = (function(_super) {
    __extends(GitCloneLoadingView, _super);

    function GitCloneLoadingView() {
      return GitCloneLoadingView.__super__.constructor.apply(this, arguments);
    }

    GitCloneLoadingView.content = function() {
      return this.div({
        "class": 'git-clone-loading'
      }, (function(_this) {
        return function() {
          _this.span({
            "class": 'loading loading-spinner-large inline-block'
          });
          return _this.span("Cloning repo...");
        };
      })(this));
    };

    return GitCloneLoadingView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1jbG9uZVxcbGliXFxnaXQtY2xvbmUtbG9hZGluZy12aWV3LmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsTUFBQSx5QkFBQTtJQUFBO21TQUFBOztBQUFBLEVBQUMsT0FBUSxPQUFBLENBQVEsV0FBUixFQUFSLElBQUQsQ0FBQTs7QUFBQSxFQUVBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFDSiwwQ0FBQSxDQUFBOzs7O0tBQUE7O0FBQUEsSUFBQSxtQkFBQyxDQUFBLE9BQUQsR0FBVSxTQUFBLEdBQUE7YUFDUixJQUFDLENBQUEsR0FBRCxDQUFLO0FBQUEsUUFBQSxPQUFBLEVBQU8sbUJBQVA7T0FBTCxFQUFpQyxDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQSxHQUFBO0FBQy9CLFVBQUEsS0FBQyxDQUFBLElBQUQsQ0FBTTtBQUFBLFlBQUEsT0FBQSxFQUFPLDRDQUFQO1dBQU4sQ0FBQSxDQUFBO2lCQUNBLEtBQUMsQ0FBQSxJQUFELENBQU0saUJBQU4sRUFGK0I7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFqQyxFQURRO0lBQUEsQ0FBVixDQUFBOzsrQkFBQTs7S0FEZ0MsS0FIbEMsQ0FBQTtBQUFBIgp9

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-clone/lib/git-clone-loading-view.coffee
