(function() {
  var BufferedProcess, CompositeDisposable, GitClone, GitCloneLoadingView, GitCloneView, child_process, get_repo_name, path, _ref;

  GitCloneView = require('./git-clone-view');

  GitCloneLoadingView = require('./git-clone-loading-view');

  _ref = require('atom'), CompositeDisposable = _ref.CompositeDisposable, BufferedProcess = _ref.BufferedProcess;

  path = require('path');

  child_process = require('child_process');

  module.exports = GitClone = {
    gitCloneView: null,
    loadingView: null,
    modalPanel: null,
    loadingModalPanel: null,
    subscriptions: null,
    config: {
      target_directory: {
        type: 'string',
        "default": "/tmp"
      }
    },
    name: "git-clone",
    activate: function(state) {
      this.gitCloneView = new GitCloneView(state.gitCloneViewState);
      this.loadingView = new GitCloneLoadingView();
      this.modalPanel = atom.workspace.addModalPanel({
        item: this.gitCloneView,
        visible: false
      });
      this.loadingModalPanel = atom.workspace.addModalPanel({
        item: this.loadingView,
        visible: false
      });
      this.gitCloneView.on('keydown', (function(_this) {
        return function(e) {
          var repo_url, target_directory;
          if (e.keyCode === 13) {
            repo_url = _this.gitCloneView.urlbar.getModel().getText();
            _this.loadingModalPanel.show();
            target_directory = atom.config.get("" + _this.name + ".target_directory");
            _this.clone_repo(repo_url, target_directory, function(err, loc) {
              if (!err) {
                atom.open({
                  pathsToOpen: [loc],
                  newWindow: true
                });
              }
              return _this.loadingModalPanel.hide();
            });
            _this.gitCloneView.clear();
            return _this.modalPanel.hide();
          } else if (e.keyCode === 27) {
            return _this.modalPanel.hide();
          }
        };
      })(this));
      this.subscriptions = new CompositeDisposable;
      return this.subscriptions.add(atom.commands.add('atom-workspace', {
        'git-clone:clone': (function(_this) {
          return function() {
            return _this.toggle();
          };
        })(this)
      }));
    },
    deactivate: function() {
      this.modalPanel.destroy();
      this.loadingModalPanel.destroy();
      this.subscriptions.dispose();
      this.gitCloneView.destroy();
      return this.loadingView.destroy();
    },
    serialize: function() {
      return {
        gitCloneViewState: this.gitCloneView.serialize()
      };
    },
    toggle: function() {
      if (this.modalPanel.isVisible()) {
        return this.modalPanel.hide();
      } else {
        this.modalPanel.show();
        return this.gitCloneView.focus();
      }
    },
    clone_repo: function(repo_uri, target_directory, callback) {
      var args, clone_stderr, command, exit, full_path, git_clone, repo_name, stderr;
      repo_name = get_repo_name(repo_uri);
      full_path = path.join(target_directory, repo_name);
      clone_stderr = "";
      command = 'git';
      args = ['clone', repo_uri, full_path];
      stderr = function(output) {
        return clone_stderr = output;
      };
      exit = function(code) {
        callback(code, full_path);
        if (code !== 0) {
          return alert("Exit " + code + ". stderr: " + clone_stderr);
        }
      };
      return git_clone = new BufferedProcess({
        command: command,
        args: args,
        stderr: stderr,
        exit: exit
      });
    }
  };

  get_repo_name = function(repo_uri) {
    var last, repo_name, tmp;
    tmp = repo_uri.split('/');
    repo_name = tmp[tmp.length - 1];
    tmp = repo_name.split('.');
    last = tmp[tmp.length - 1];
    if (last === 'git') {
      return repo_name = tmp.slice(0, -1).join('.');
    } else {
      return repo_name;
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1jbG9uZVxcbGliXFxnaXQtY2xvbmUuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLDJIQUFBOztBQUFBLEVBQUEsWUFBQSxHQUFlLE9BQUEsQ0FBUSxrQkFBUixDQUFmLENBQUE7O0FBQUEsRUFDQSxtQkFBQSxHQUFzQixPQUFBLENBQVEsMEJBQVIsQ0FEdEIsQ0FBQTs7QUFBQSxFQUVBLE9BQXlDLE9BQUEsQ0FBUSxNQUFSLENBQXpDLEVBQUMsMkJBQUEsbUJBQUQsRUFBc0IsdUJBQUEsZUFGdEIsQ0FBQTs7QUFBQSxFQUlBLElBQUEsR0FBTyxPQUFBLENBQVEsTUFBUixDQUpQLENBQUE7O0FBQUEsRUFLQSxhQUFBLEdBQWdCLE9BQUEsQ0FBUSxlQUFSLENBTGhCLENBQUE7O0FBQUEsRUFPQSxNQUFNLENBQUMsT0FBUCxHQUFpQixRQUFBLEdBQ2Y7QUFBQSxJQUFBLFlBQUEsRUFBYyxJQUFkO0FBQUEsSUFDQSxXQUFBLEVBQWEsSUFEYjtBQUFBLElBRUEsVUFBQSxFQUFZLElBRlo7QUFBQSxJQUdBLGlCQUFBLEVBQW1CLElBSG5CO0FBQUEsSUFJQSxhQUFBLEVBQWUsSUFKZjtBQUFBLElBTUEsTUFBQSxFQUNFO0FBQUEsTUFBQSxnQkFBQSxFQUNFO0FBQUEsUUFBQSxJQUFBLEVBQU0sUUFBTjtBQUFBLFFBQ0EsU0FBQSxFQUFTLE1BRFQ7T0FERjtLQVBGO0FBQUEsSUFXQSxJQUFBLEVBQU0sV0FYTjtBQUFBLElBYUEsUUFBQSxFQUFVLFNBQUMsS0FBRCxHQUFBO0FBRVIsTUFBQSxJQUFDLENBQUEsWUFBRCxHQUFvQixJQUFBLFlBQUEsQ0FBYSxLQUFLLENBQUMsaUJBQW5CLENBQXBCLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxXQUFELEdB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

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-clone/lib/git-clone.coffee
