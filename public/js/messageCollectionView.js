var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var $ =require('jquery');
var messageModelView = require('./messageModelView');
var messageCollection = require('./messageCollection');


module.exports = Backbone.View.extend({
  el: '.sendMsgBody',
  template: _.template(tmpl.gamePage),
  templateMsg: _.template(tmpl.message),
  initialize: function(){
    console.log('message collection view initted');
    this.addAll();
    this.render();
  },
  render: function(){
    var markup = this.templateMsg;
    this.$el.html(markup);
    return this;
  },

  addOne: function(el){
    var modelView = new messageModelView({model: el});
    this.$el.append(modelView.render().el);
  },
  addAll: function(){
    this.$el.html('');
    window.glob1 = this.collection.models;
    _.each(this.collection.models, this.addOne, this);
  },
  render: function(){
    var markup = this.templateMsg;
    this.$el.html(markup);
    return this;
  }
})
