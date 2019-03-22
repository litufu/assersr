"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = exports.GMESSAGE_ADDED_TOPIC = exports.MESSAGE_ADDED_TOPIC = exports.LOCATIONGROUP_REFETCH = exports.LOCATIONGROUPUSER_REMOVED = exports.LOCATIONGROUPUSER_ADDED = exports.LOCATIONGROUP_CHANGED = exports.MYOLDCOLLEAGUES_CHANGED = exports.COLLEAGUES_ADDED = exports.STUDENTS_ADDED = exports.WORKGROUP_CHANGED = exports.CLASSGROUP_CHANGED = exports.FAMILYGROUP_CHANGED = exports.FAMILY_CHANGED = exports.FAMILY_CONNECTED = void 0;

var _apolloServer = require("apollo-server");

var _subscriptions = require("../subscriptions");

var FAMILY_CONNECTED = 'familyConnected';
exports.FAMILY_CONNECTED = FAMILY_CONNECTED;
var FAMILY_CHANGED = 'familyChanged';
exports.FAMILY_CHANGED = FAMILY_CHANGED;
var FAMILYGROUP_CHANGED = 'familyGroupChanged';
exports.FAMILYGROUP_CHANGED = FAMILYGROUP_CHANGED;
var CLASSGROUP_CHANGED = 'classGroupChanged';
exports.CLASSGROUP_CHANGED = CLASSGROUP_CHANGED;
var WORKGROUP_CHANGED = 'workGroupChanged';
exports.WORKGROUP_CHANGED = WORKGROUP_CHANGED;
var STUDENTS_ADDED = 'studentsAdded';
exports.STUDENTS_ADDED = STUDENTS_ADDED;
var COLLEAGUES_ADDED = 'colleaguesAdded';
exports.COLLEAGUES_ADDED = COLLEAGUES_ADDED;
var MYOLDCOLLEAGUES_CHANGED = 'myOldcolleaguesChanged';
exports.MYOLDCOLLEAGUES_CHANGED = MYOLDCOLLEAGUES_CHANGED;
var LOCATIONGROUP_CHANGED = 'locationGroupChanged';
exports.LOCATIONGROUP_CHANGED = LOCATIONGROUP_CHANGED;
var LOCATIONGROUPUSER_ADDED = 'locationGroupUserAdded';
exports.LOCATIONGROUPUSER_ADDED = LOCATIONGROUPUSER_ADDED;
var LOCATIONGROUPUSER_REMOVED = 'locationGroupUserRemoved';
exports.LOCATIONGROUPUSER_REMOVED = LOCATIONGROUPUSER_REMOVED;
var LOCATIONGROUP_REFETCH = 'locationGroupRefech';
exports.LOCATIONGROUP_REFETCH = LOCATIONGROUP_REFETCH;
var MESSAGE_ADDED_TOPIC = 'messageAdded';
exports.MESSAGE_ADDED_TOPIC = MESSAGE_ADDED_TOPIC;
var GMESSAGE_ADDED_TOPIC = 'gMessageAdded';
exports.GMESSAGE_ADDED_TOPIC = GMESSAGE_ADDED_TOPIC;
var Subscription = {
  familyConnected: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(FAMILY_CONNECTED);
    }, function (payload, variables) {
      return Boolean(variables.familyIds && ~variables.familyIds.indexOf(payload.familyConnected.id));
    })
  },
  familyChanged: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(FAMILY_CHANGED);
    }, function (payload, variables, ctx) {
      return Boolean(ctx.user.id === payload.familyChanged.text);
    })
  },
  familyGroupChanged: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(FAMILYGROUP_CHANGED);
    }, function (payload, variables, ctx) {
      return Boolean(ctx.user.id === payload.familyGroupChanged.text);
    })
  },
  studentsAdded: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(STUDENTS_ADDED);
    }, function (payload, variables, ctx) {
      return Boolean(ctx.user.id === payload.studentsAdded.text);
    })
  },
  classGroupChanged: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(CLASSGROUP_CHANGED);
    }, function (payload, variables, ctx) {
      return Boolean(ctx.user.id === payload.classGroupChanged.text);
    })
  },
  colleaguesAdded: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(COLLEAGUES_ADDED);
    }, function (payload, variables, ctx) {
      return Boolean(ctx.user.id === payload.colleaguesAdded.text);
    })
  },
  myOldcolleaguesChanged: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(MYOLDCOLLEAGUES_CHANGED);
    }, function (payload, variables, ctx) {
      return Boolean(ctx.user.id === payload.myOldcolleaguesChanged.text);
    })
  },
  workGroupChanged: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(WORKGROUP_CHANGED);
    }, function (payload, variables, ctx) {
      return Boolean(ctx.user.id === payload.workGroupChanged.text);
    })
  },
  locationGroupChanged: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(LOCATIONGROUP_CHANGED);
    }, function (payload, args, ctx) {
      return Boolean(ctx.user.id === payload.locationGroupChanged.toId);
    })
  },
  messageAdded: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(MESSAGE_ADDED_TOPIC);
    }, function (payload, args) {
      return Boolean(args.userId === payload.messageAdded.to.id);
    })
  },
  gMessageAdded: {
    subscribe: (0, _apolloServer.withFilter)(function () {
      return _subscriptions.pubsub.asyncIterator(GMESSAGE_ADDED_TOPIC);
    }, function (payload, args) {
      return Boolean(args.groupIds && ~args.groupIds.indexOf(payload.gMessageAdded.to) && args.userId !== payload.gMessageAdded.from.id // don't send to user creating message
      );
    })
  }
};
exports.Subscription = Subscription;
//# sourceMappingURL=Subscription.js.map