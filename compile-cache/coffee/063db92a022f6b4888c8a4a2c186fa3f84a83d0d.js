(function() {
  var $$, BufferedProcess, GitHistoryView, SelectListView, fs, path, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  path = require("path");

  fs = require("fs");

  _ref = require("atom-space-pen-views"), $$ = _ref.$$, SelectListView = _ref.SelectListView;

  BufferedProcess = require("atom").BufferedProcess;

  GitHistoryView = (function(_super) {
    __extends(GitHistoryView, _super);

    function GitHistoryView() {
      return GitHistoryView.__super__.constructor.apply(this, arguments);
    }

    GitHistoryView.prototype.initialize = function(file) {
      this.file = file;
      GitHistoryView.__super__.initialize.call(this);
      if (file) {
        return this.show();
      }
    };

    GitHistoryView.prototype.show = function() {
      this.setLoading("Loading history for " + (path.basename(this.file)));
      if (this.panel == null) {
        this.panel = atom.workspace.addModalPanel({
          item: this
        });
      }
      this.panel.show();
      this.storeFocusedElement();
      this._loadLogData();
      return this.focusFilterEditor();
    };

    GitHistoryView.prototype.cancel = function() {
      var _ref1;
      GitHistoryView.__super__.cancel.call(this);
      return (_ref1 = this.panel) != null ? _ref1.hide() : void 0;
    };

    GitHistoryView.prototype._loadLogData = function() {
      var exit, logItems, stdout;
      logItems = [];
      stdout = function(output) {
        var author, authorEscaped, commit, commitAltered, commits, freeTextMatches, item, message, messageEscaped, _i, _j, _len, _len1, _ref1, _results;
        output = output.replace('\n', '');
        commits = output.match(/{"author": ".*?","relativeDate": ".*?","fullDate": ".*?","message": ".*?","hash": "[a-f0-9]*?"},/g);
        output = '';
        if (commits != null) {
          for (_i = 0, _len = commits.length; _i < _len; _i++) {
            commit = commits[_i];
            freeTextMatches = commit.match(/{"author": "(.*?)","relativeDate": ".*?","fullDate": ".*?","message": "(.*)","hash": "[a-f0-9]*?"},/);
            author = freeTextMatches[1];
            authorEscaped = author.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"");
            commitAltered = commit.replace(author, authorEscaped);
            message = freeTextMatches[2];
            messageEscaped = message.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"");
            output += commitAltered.replace(message, messageEscaped);
          }
        }
        if ((output != null ? output.substring(output.length - 1) : void 0) === ",") {
          output = output.substring(0, output.length - 1);
        }
        _ref1 = JSON.parse("[" + output + "]");
        _results = [];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          item = _ref1[_j];
          _results.push(logItems.push(item));
        }
        return _results;
      };
      exit = (function(_this) {
        return function(code) {
          if (code === 0 && logItems.length !== 0) {
            return _this.setItems(logItems);
          } else {
            return _this.setError("No history found for " + (path.basename(_this.file)));
          }
        };
      })(this);
      return this._fetchFileHistory(stdout, exit);
    };

    GitHistoryView.prototype._fetchFileHistory = function(stdout, exit) {
      var format;
      format = "{\"author\": \"%an\",\"relativeDate\": \"%cr\",\"fullDate\": \"%ad\",\"message\": \"%s\",\"hash\": \"%h\"},";
      return new BufferedProcess({
        command: "git",
        args: ["-C", path.dirname(this.file), "log", "--max-count=" + (this._getMaxNumberOfCommits()), "--pretty=format:" + format, "--topo-order", "--date=local", this.file],
        stdout: stdout,
        exit: exit
      });
    };

    GitHistoryView.prototype._getMaxNumberOfCommits = function() {
      return atom.config.get("git-history.maxCommits");
    };

    GitHistoryView.prototype._isDiffEnabled = function() {
      return atom.config.get("git-history.showDiff");
    };

    GitHistoryView.prototype.getFilterKey = function() {
      return "message";
    };

    GitHistoryView.prototype.viewForItem = function(logItem) {
      var fileName;
      fileName = path.basename(this.file);
      return $$(function() {
        return this.li({
          "class": "two-lines"
        }, (function(_this) {
          return function() {
            _this.div({
              "class": "pull-right"
            }, function() {
              return _this.span({
                "class": "secondary-line"
              }, "" + logItem.hash);
            });
            _this.span({
              "class": "primary-line"
            }, logItem.message);
            _this.div({
              "class": "secondary-line"
            }, "" + logItem.author + " authored " + logItem.relativeDate);
            return _this.div({
              "class": "secondary-line"
            }, "" + logItem.fullDate);
          };
        })(this));
      });
    };

    GitHistoryView.prototype.confirmed = function(logItem) {
      var exit, fileContents, stdout;
      fileContents = "";
      stdout = (function(_this) {
        return function(output) {
          return fileContents += output;
        };
      })(this);
      exit = (function(_this) {
        return function(code) {
          var outputDir, outputFilePath;
          if (code === 0) {
            outputDir = "" + (atom.getConfigDirPath()) + "/.git-history";
            if (!fs.existsSync(outputDir)) {
              fs.mkdir(outputDir);
            }
            outputFilePath = "" + outputDir + "/" + logItem.hash + "-" + (path.basename(_this.file));
            if (_this._isDiffEnabled()) {
              outputFilePath += ".diff";
            }
            return fs.writeFile(outputFilePath, fileContents, function(error) {
              var options;
              if (!error) {
                options = {
                  split: "right",
                  activatePane: true
                };
                return atom.workspace.open(outputFilePath, options);
              }
            });
          } else {
            return _this.setError("Could not retrieve history for " + (path.basename(_this.file)));
          }
        };
      })(this);
      return this._loadRevision(logItem.hash, stdout, exit);
    };

    GitHistoryView.prototype._loadRevision = function(hash, stdout, exit) {
      var diffArgs, r, repo, showArgs, showDiff, _i, _len, _ref1;
      _ref1 = atom.project.getRepositories();
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        r = _ref1[_i];
        if (this.file.replace(/\\/g, '/').indexOf(r != null ? r.repo.workingDirectory : void 0) !== -1) {
          repo = r;
        }
      }
      showDiff = this._isDiffEnabled();
      diffArgs = ["-C", repo.repo.workingDirectory, "diff", "-U9999999", "" + hash + ":" + (atom.project.relativize(this.file).replace(/\\/g, '/')), "" + (atom.project.relativize(this.file).replace(/\\/g, '/'))];
      showArgs = ["-C", path.dirname(this.file), "show", "" + hash + ":" + (atom.project.relativize(this.file).replace(/\\/g, '/'))];
      return new BufferedProcess({
        command: "git",
        args: showDiff ? diffArgs : showArgs,
        stdout: stdout,
        exit: exit
      });
    };

    return GitHistoryView;

  })(SelectListView);

  module.exports = GitHistoryView;

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiQzpcXFVzZXJzXFx4MTNnMDMzXFwuYXRvbVxccGFja2FnZXNcXGdpdC1oaXN0b3J5XFxsaWJcXGdpdC1oaXN0b3J5LXZpZXcuY29mZmVlIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLG1FQUFBO0lBQUE7bVNBQUE7O0FBQUEsRUFBQSxJQUFBLEdBQU8sT0FBQSxDQUFRLE1BQVIsQ0FBUCxDQUFBOztBQUFBLEVBQ0EsRUFBQSxHQUFLLE9BQUEsQ0FBUSxJQUFSLENBREwsQ0FBQTs7QUFBQSxFQUVBLE9BQXVCLE9BQUEsQ0FBUSxzQkFBUixDQUF2QixFQUFDLFVBQUEsRUFBRCxFQUFLLHNCQUFBLGNBRkwsQ0FBQTs7QUFBQSxFQUdDLGtCQUFtQixPQUFBLENBQVEsTUFBUixFQUFuQixlQUhELENBQUE7O0FBQUEsRUFLTTtBQUVGLHFDQUFBLENBQUE7Ozs7S0FBQTs7QUFBQSw2QkFBQSxVQUFBLEdBQVksU0FBRSxJQUFGLEdBQUE7QUFDUixNQURTLElBQUMsQ0FBQSxPQUFBLElBQ1YsQ0FBQTtBQUFBLE1BQUEsNkNBQUEsQ0FBQSxDQUFBO0FBQ0EsTUFBQSxJQUFXLElBQVg7ZUFBQSxJQUFDLENBQUEsSUFBRCxDQUFBLEVBQUE7T0FGUTtJQUFBLENBQVosQ0FBQTs7QUFBQSw2QkFJQSxJQUFBLEdBQU0sU0FBQSxHQUFBO0FBQ0YsTUFBQSxJQUFDLENBQUEsVUFBRCxDQUFhLHNCQUFBLEdBQXFCLENBQUMsSUFBSSxDQUFDLFFBQUwsQ0FBYyxJQUFDLENBQUEsSUFBZixDQUFELENBQWxDLENBQUEsQ0FBQTs7UUFDQSxJQUFDLENBQUEsUUFBUyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWYsQ0FBNkI7QUFBQSxVQUFBLElBQUEsRUFBTSxJQUFOO1NBQTdCO09BRFY7QUFBQSxNQUVBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFB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

//# sourceURL=/C:/Users/x13g033/.atom/packages/git-history/lib/git-history-view.coffee
