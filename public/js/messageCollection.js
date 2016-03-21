var Backbone = require('backbone');
var messageModel = require('./messageModel');
var tmpl = require('./templates');
var _ = require('underscore');
var $ =require('jquery');
module.exports = Backbone.Collection.extend({
  model: messageModel,
  url: '/cryptograms',
  initialize: function(){
    console.log('message collection initted');
  },
  parse: function (data) {
    console.log(data);
    var that = this;
    window.glob3= data;
    var parsedData = _.map(data, function(el){
      return {
        hint: el.hint,
        sender: el.sender.name,
        scramble: el.scramble
      }
    });
    window.glob4 = parsedData;
  }
});
