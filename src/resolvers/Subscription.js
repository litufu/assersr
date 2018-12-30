import { withFilter } from 'apollo-server'

import { pubsub } from '../subscriptions';


export const FAMILY_CONNECTED = 'familyConnected';
export const FAMILY_CHANGED = 'familyChanged'
export const FAMILYGROUP_CHANGED = 'familyGroupChanged'

export const Subscription = {
  familyConnected: {
    // Additional event labels can be passed to asyncIterator creation
    subscribe: withFilter(
        () => pubsub.asyncIterator(FAMILY_CONNECTED),
        (payload, variables) => {
          return Boolean(variables.familyIds &&
            ~variables.familyIds.indexOf(payload.familyConnected.id))
        }
      )
  },
  familyChanged: {
    // Additional event labels can be passed to asyncIterator creation
    subscribe: withFilter(
        () => pubsub.asyncIterator(FAMILY_CHANGED),
        (payload, variables,ctx) => {
          return Boolean(ctx.user.id === payload.familyChanged.text)
        }
    )
  },
  familyGroupChanged: {
    // Additional event labels can be passed to asyncIterator creation
    subscribe: withFilter(
        () => pubsub.asyncIterator(FAMILYGROUP_CHANGED),
        (payload, variables,ctx) => {
          return Boolean(ctx.user.id === payload.familyGroupChanged.text)
        }
    )
  },
}

