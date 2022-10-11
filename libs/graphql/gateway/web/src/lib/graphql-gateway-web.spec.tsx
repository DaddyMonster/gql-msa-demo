import { render } from '@testing-library/react';

import GraphqlGatewayWeb from './graphql-gateway-web';

describe('GraphqlGatewayWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GraphqlGatewayWeb />);
    expect(baseElement).toBeTruthy();
  });
});
