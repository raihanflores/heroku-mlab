import { Meteor } from 'meteor/meteor';
import Mongo from 'meteor/mongo';

const Users = new Mongo.Colelction('users');

Meteor.methods({
  'getUsers': () => {
    return Mongo.find({}).fetch();
  }
});