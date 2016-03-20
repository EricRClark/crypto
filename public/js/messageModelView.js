var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var $ = require('jquery');
var AddMsgView = require('./sendMessageView');
var messageModel = require('./messageModel');

module.exports = Backbone.View.extend({
  el: '.appendGame',
  template: _.template(tmpl.gamePage),
  initialize: function(){},
  events: {
    'submit .submit': 'submitAnswer',
    'click .back': 'goBack',
    'click .giveUp': 'giveUp'
  },
  addOne: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  render: function(){}
});
