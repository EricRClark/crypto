var $ = require('jquery');
var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var userModel = require('./usermodel');
var loginModel = require('./loginmodel');
module.exports = Backbone.View.extend({
  el: '.navbar',
  template: _.template(tmpl.addUser),
  templateUser: _.template(tmpl.userModel),
  templateMsg: _.template(tmpl.sendMsgForm),
  templateFail: _.template(tmpl.loginFail),
  initialize: function () {
    this.$el.append(this.render());
  },

  render: function () {
    var markup = this.template;
    this.$el.html(markup);
    return this;
  },
  events: {
    'click .create': 'addUser',
    'click .login': 'logIn',
    'click .logout': 'logOut',
    'click .send': 'sendMessageForm',
  },
  addUser: function(evt){
    evt.preventDefault();
    var newUser = {
      name: this.$el.find('input[name="usernameC"]').val(),
      passwordHash: this.$el.find('input[name="passwordC"]').val(),

    };
    var newUserModel = new userModel(newUser);
    this.$el.find('input').val('');
    newUserModel.save({},{
      success: function(model, response){
      }
    });
    console.log("newUserModel", newUserModel)
    // this.listenTo(this.collection, 'add', this.addAll);
  },

  logIn: function(evt){
    evt.preventDefault();
    that = this;
    var exsistingUser = {
      name: this.$el.find('input[name="username"]').val(),
      passwordHash: this.$el.find('input[name="password"]').val(),

    };
    var newExistingModel = new loginModel(exsistingUser);
    this.$el.find('input').val('');
    newExistingModel.save(null, {
      error: function (model, response) {
          if (response.statusText === "Internal Server Error") {
            var markup = that.templateFail;
            that.$el.prepend(markup);
         }
         else {
           var markup = that.templateUser(exsistingUser)
           that.$el.html(markup);
         }
      },
  })
  },
  logOut: function(evt){
    evt.preventDefault();
    var markup = this.template;
    this.$el.html(markup);
  },

  sendMessageForm: function(evt){
    evt.preventDefault();
    var markup = this.templateMsg;
    this.$el.siblings('.sendMsg').find('.sendMsgBody').html(markup);
  }


});
