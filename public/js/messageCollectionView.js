var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var $ =require('jquery');
var messageModelView = require('./messageModelView');

module.exports = Backbone.View.extend({
  el: '.messagesAppend',
  template: _.template(tmpl.gamePage),
  templateMsg: _.template(tmpl.message),
  initialize: function(){
    console.log('message collection view initted');
    this.addAll();
  },

  addOne: function(el){
    
  },
  addAll: function(){
    this.$el.html('');
    console.log(this.collection);
    window.glob1 = this.collection;
    _.each(this.collection.models, this.addOne, this);
  },
  render: function(){
    var markup = this.templateMsg;
    this.$el.html(markup);
    return this;
  }
})
