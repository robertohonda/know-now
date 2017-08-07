import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Status from '/imports/model/Status';

Meteor.methods({
	statusUpdate(local, status){
		//console.log(new Date());
		//console.log(local);
		//console.log(status);
		Status.insert({
			data: new Date(), 
			local, 
			status
		});
		//throw new Meteor.Error('rá');
	}
});