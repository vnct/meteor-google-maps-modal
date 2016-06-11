import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './home.html';

Template.home.events({
  'click .call-modal': function(event, instance, template) {
    event.preventDefault();
    let personal_data = "toto";
    // var data = Template.currentData(self.view);
    // Blaze.renderWithData(Template.MyMap, data, $("#map-container")[0])
    Modal.show('MyModal',personal_data);
  }
});
