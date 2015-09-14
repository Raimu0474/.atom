(function() {
  var GitCloneView, TextEditorView, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('space-pen').View;

  TextEditorView = require('atom-space-pen-views').TextEditorView;

  module.exports = GitCloneView = (function(_super) {
    __extends(GitCloneView, _super);

    function GitCloneView() {
      return GitCloneView.__super__.constructor.apply(this, arguments);
    }

    GitCloneView.content = function() {
      return this.div({
        "class": 'git-clone-input'
      }, (function(_this) {
        return function() {
          _this.div("Enter a url to `git-clone` ex: https://github.com/atom/atom.git");
          return _this.subview('urlbar', new TextEditorView({
            mini: true
          }));
        };
      })(this));
    };

    GitCloneView.prototype.focus = function() {
      return this.urlbar.focus();
    };

    GitCloneView.prototype.clear = function() {
      return this.urlbar.setText('');
    };

    return GitCloneView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1jbG9uZVxcbGliXFxnaXQtY2xvbmUtdmlldy5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUFBLE1BQUEsa0NBQUE7SUFBQTttU0FBQTs7QUFBQSxFQUFDLE9BQVEsT0FBQSxDQUFRLFdBQVIsRUFBUixJQUFELENBQUE7O0FBQUEsRUFDQyxpQkFBa0IsT0FBQSxDQUFRLHNCQUFSLEVBQWxCLGNBREQsQ0FBQTs7QUFBQSxFQUdBLE1BQU0sQ0FBQyxPQUFQLEdBQ007QUFDSixtQ0FBQSxDQUFBOzs7O0tBQUE7O0FBQUEsSUFBQSxZQUFDLENBQUEsT0FBRCxHQUFVLFNBQUEsR0FBQTthQUNSLElBQUMsQ0FBQSxHQUFELENBQUs7QUFBQSxRQUFBLE9BQUEsRUFBTyxpQkFBUDtPQUFMLEVBQStCLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7QUFDN0IsVUFBQSxLQUFDLENBQUEsR0FBRCxDQUFLLGlFQUFMLENBQUEsQ0FBQTtpQkFDQSxLQUFDLENBQUEsT0FBRCxDQUFTLFFBQVQsRUFBdUIsSUFBQSxjQUFBLENBQWU7QUFBQSxZQUFBLElBQUEsRUFBTSxJQUFOO1dBQWYsQ0FBdkIsRUFGNkI7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUEvQixFQURRO0lBQUEsQ0FBVixDQUFBOztBQUFBLDJCQUtBLEtBQUEsR0FBTyxTQUFBLEdBQUE7YUFDTCxJQUFDLENBQUEsTUFBTSxDQUFDLEtBQVIsQ0FBQSxFQURLO0lBQUEsQ0FMUCxDQUFBOztBQUFBLDJCQVFBLEtBQUEsR0FBTyxTQUFBLEdBQUE7YUFDTCxJQUFDLENBQUEsTUFBTSxDQUFDLE9BQVIsQ0FBZ0IsRUFBaEIsRUFESztJQUFBLENBUlAsQ0FBQTs7d0JBQUE7O0tBRHlCLEtBSjNCLENBQUE7QUFBQSIKfQ==

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-clone/lib/git-clone-view.coffee
