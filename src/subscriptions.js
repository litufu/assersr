import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';
import { $$asyncIterator } from 'iterall';

import {REDISHOST,REDISPWD} from './services/settings'

const options = {
  host: REDISHOST,
  port: '6379',
  password:REDISPWD,
  retry_strategy: options  => {
    // reconnect after
    return Math.max(options.attempt * 100, 3000);
  }
};


export const pubsub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options)
});

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