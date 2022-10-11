import { Card, TextInput } from '@mantine/core';
import { CommonLayout, useUsersQuery } from '@msa-demo/graphql/gateway/web';

export function Index() {
  const [{ data }, refetch] = useUsersQuery({
    variables: { limit: 10, offset: 0 },
  });

  return (
    <Card>
      <CommonLayout />
      <TextInput
        variant="unstyled"
        styles={{
          input: { flex: 1 },
          wrapper: { padding: 10 },
        }}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Card>
  );
}

/* export const getServerSideProps = async () => {
  await client.query(UsersDocument, { limit: 10, offset: 0 }).toPromise();
  return {
    props: {
      urqlState: ssr.extractData(),
    },
  };
}; */

export default Index;
