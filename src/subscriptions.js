import { PubSub } from 'apollo-server';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';


import { $$asyncIterator } from 'iterall';

// const options = {
//   host: '127.0.0.1',
//   port: '6379',
//   retry_strategy: options  => {
//     // reconnect after
//     return Math.max(options.attempt * 100, 3000);
//   }
// };


// export const pubsub = new RedisPubSub({
//   connection: options,
//   publisher: new Redis(options),
//   subscriber: new Redis(options)
// });

export const pubsub = new PubSub()

pubsub.asyncAuthIterator = (messages, authPromise) => {
    const asyncIterator = pubsub.asyncIterator(messages);
    return {
      next() {
        return authPromise.then(() => asyncIterator.next());
      },
      return() {
        return authPromise.then(() => asyncIterator.return());
      },
      throw(error) {
        return asyncIterator.throw(error);
      },
      [$$asyncIterator]() {
        return asyncIterator;
      },
    };
  };
  

export default pubsub;