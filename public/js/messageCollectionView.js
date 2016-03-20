var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var $ =require('jquery');
var messageModelView = require('./messageModelView');

module.exports = Backbone.View.extend({
  el: '.messagesAppend',
  initialize: function(){
    console.log('message collection view initted');
    this.addAll();
  },

  addOne: function(el){
    var modelView = new messageModelView({model: el});
    console.log(modelView);
    // window.globthree = modelView;
    this.$el.append(modelView.render().el);
  },
  addAll: function(){
    this.$el.html('');
    console.log(this.collection);
    window.glob1 = this.collection;
    _.each(this.collection.models, this.addOne, this);
  }
})
