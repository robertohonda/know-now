import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import Status from '/imports/model/Status';

import './listStatus.html';
import './itemStatus';

Template.listStatus.helpers({
	statusList(){
		return Status.find({}, {sort: {data: -1}});
	},
});