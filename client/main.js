import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './main.html';
import '/imports/ui/routes';

Template.novoStatus.events({
  'click button'(event, instance) {

  	//alert($('select[id=local]').val() + ' está ' + 
   		//$('input[id=status]').val());

  	Meteor.call('statusUpdate', $('select[id=local]').val(), $('input[id=status]').val())
  },
});
