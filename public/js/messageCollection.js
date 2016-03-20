var Backbone = require('backbone');
var messageModel = require('./messageModel');

module.exports = Backbone.Collection.extend({
  model: messageModel,
  url: '/cryptograms',
  initialize: function(){
    console.log('message collection initted');

  },

  // parse: function (data) {
  //   var that = this;
  //   window.glob3= data;
  //   return _.map(data.photos.photo, function (el) {
  //
  //     return { photoUrl: that.buildImgUrl(el),
  //              title: el.title,
  //              dtUpload: el.dateupload
  //            };
  //   });
  // },

});
