import {
  createClient,
  debugExchange,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql/core';
import { refocusExchange } from '@urql/exchange-refocus';
import { cacheExchange } from '@urql/exchange-graphcache';

const isBrowser = () =>
  typeof window !== 'undefined' && typeof window.document !== 'undefined';

export const ssr = ssrExchange({ isClient: isBrowser() });
export const client = createClient({
  url: 'http://localhost:3333/graphql',
  exchanges: [
    debugExchange,
    dedupExchange,
    refocusExchange(),
    cacheExchange({
      resolvers: {},
    }),
    ssr,
    fetchExchange,
  ],
});
