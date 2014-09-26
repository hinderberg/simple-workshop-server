define([
    'backbone',
  ],
  function(Backbone) {

  var MessageModel = Backbone.Model.extend({
    defaults: {
      from: "",
      message: "",
      date: "",
      image: ""
    },

    urlRoot:"message"

  });

  return MessageModel;

});
