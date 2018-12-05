import { withFilter } from 'apollo-server'

import { pubsub } from '../subscriptions';

export const FAMILY_CONNECTED = 'familyConnected';

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
}

