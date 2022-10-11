import { graphqlServiceAccount } from './graphql-service-account';

describe('graphqlServiceAccount', () => {
  it('should work', () => {
    expect(graphqlServiceAccount()).toEqual('graphql-service-account');
  });
});
