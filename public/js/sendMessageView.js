var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var $ = require('jquery');
var messageModel = require('./messageModel');


module.exports = Backbone.View.extend({
  el: '.sendMsgBody',
  template: _.template(tmpl.sendMsgForm),
  templateMsg: _.template(tmpl.message),
  templateGame: _.template(tmpl.gamePage),
  initialize: function(){
    this.$el.append(this.render());
  },
  render: function(){
    var markup = this.templateMsg;
    this.$el.html(markup);
    return this;
  },
  events: {
    'click .sendMsg': 'createCrypto',
    'click .back': 'goBack',
    'click .play': 'playGame'
  },
  createCrypto: function(evt){
  evt.preventDefault();
  var newCrypto = {
    sender: this.$el.parent().siblings('.navbar').find('h1').text().trim(),
    recipient: this.$el.find('.recipient').val(),
    hint: this.$el.find('.hint').val(),
    originalMessage: this.$el.find('.message').val(),
  };
  window.glob = newCrypto;
  var newMsgModel = new messageModel(newCrypto);

  this.$el.find('input').val('');
  newMsgModel.save();
  this.listenTo(this.collection, 'add', this.addAll);

},

goBack: function(evt){
  evt.preventDefault();
  var markup = this.templateMsg;
  this.$el.html(markup);
},

playGame: function(evt){
  evt.preventDefault();
  var markup = this.templateGame;
  this.$el.html(markup);
},
});
