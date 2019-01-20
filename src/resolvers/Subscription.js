import { withFilter } from 'apollo-server'
import { map } from 'lodash';
import { pubsub } from '../subscriptions';
import { subscriptionLogic } from './logic';

export const FAMILY_CONNECTED = 'familyConnected';
export const FAMILY_CHANGED = 'familyChanged'
export const FAMILYGROUP_CHANGED = 'familyGroupChanged'
export const CLASSGROUP_CHANGED = 'classGroupChanged'
export const WORKGROUP_CHANGED = 'workGroupChanged'
export const STUDENTS_ADDED = 'studentsAdded'
export const COLLEAGUES_ADDED = 'colleaguesAdded'
export const MYOLDCOLLEAGUES_CHANGED = 'myOldcolleaguesChanged'
export const LOCATIONGROUP_CHANGED  = 'locationGroupChanged'
export const LOCATIONGROUPUSER_ADDED = 'locationGroupUserAdded'
export const LOCATIONGROUPUSER_REMOVED = 'locationGroupUserRemoved'
export const LOCATIONGROUP_REFETCH = 'locationGroupRefech'
export const MESSAGE_ADDED_TOPIC = 'messageAdded';
export const GROUP_MESSAGE_ADDED_TOPIC = 'groupMessageAdded';

export const Subscription = {
  familyConnected: {
    subscribe: withFilter(
        () => pubsub.asyncIterator(FAMILY_CONNECTED),
        (payload, variables) => {
          return Boolean(variables.familyIds &&
            ~variables.familyIds.indexOf(payload.familyConnected.id))
        }
      )
  },
  familyChanged: {
    subscribe: withFilter(
        () => pubsub.asyncIterator(FAMILY_CHANGED),
        (payload, variables,ctx) => {
          return Boolean(ctx.user.id === payload.familyChanged.text)
        }
    )
  },
  familyGroupChanged: {
    subscribe: withFilter(
        () => pubsub.asyncIterator(FAMILYGROUP_CHANGED),
        (payload, variables,ctx) => {
          return Boolean(ctx.user.id === payload.familyGroupChanged.text)
        }
    )
  },
  studentsAdded:{
    subscribe: withFilter(
        () => pubsub.asyncIterator(STUDENTS_ADDED),
        (payload, variables,ctx) => {
          return Boolean(ctx.user.id === payload.studentsAdded.text)
        }
    )
  },
  classGroupChanged: {
    subscribe: withFilter(
        () => pubsub.asyncIterator(CLASSGROUP_CHANGED),
        (payload, variables,ctx) => {
          return Boolean(ctx.user.id === payload.classGroupChanged.text)
        }
    )
  },
  colleaguesAdded:{
    subscribe: withFilter(
        () => pubsub.asyncIterator(COLLEAGUES_ADDED),
        (payload, variables,ctx) => {
          return Boolean(ctx.user.id === payload.colleaguesAdded.text)
        }
    )
  },
  myOldcolleaguesChanged:{
    subscribe: withFilter(
        () => pubsub.asyncIterator(MYOLDCOLLEAGUES_CHANGED),
        (payload, variables,ctx) => {
          return Boolean(ctx.user.id === payload.myOldcolleaguesChanged.text)
        }
    )
  },
  workGroupChanged: {
    subscribe: withFilter(
        () => pubsub.asyncIterator(WORKGROUP_CHANGED),
        (payload, variables,ctx) => {
          return Boolean(ctx.user.id === payload.workGroupChanged.text)
        }
    )
  },
  // locationGroupChanged: {
  //   subscribe: withFilter(
  //       () => pubsub.asyncIterator(LOCATIONGROUP_CHANGED),
  //       (payload, variables,ctx) => {
  //         return Boolean(ctx.user.id === payload.locationGroupChanged.text)
  //       }
  //   )
  // },
  locationGroupChanged: {
    subscribe: withFilter(
        () => pubsub.asyncIterator(LOCATIONGROUP_CHANGED),
        (payload, args,ctx) => {
          return Boolean(ctx.user.id === payload.locationGroupChanged.toId)
       }
    )
  },
  messageAdded:{
    subscribe: withFilter(
      () => pubsub.asyncIterator(MESSAGE_ADDED_TOPIC),
      (payload, args) => {
        console.log('payload',payload)
        console.log('args',args)
        return Boolean(args.userId === payload.messageAdded.to.id)
     }
  )
  },
  groupMessageAdded:{
    subscribe: withFilter(
      () => pubsub.asyncIterator(GROUP_MESSAGE_ADDED_TOPIC),
      (payload, args) => {
        console.log('payload',payload)
        console.log('args',args)
        return Boolean(
          args.groupIds &&
          ~args.groupIds.indexOf(payload.messageAdded.toId) &&
          args.userId !== payload.messageAdded.from.id, // don't send to user creating message
          )
     }
  )
  }
}

