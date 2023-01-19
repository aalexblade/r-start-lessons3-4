import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
import { Users } from './components/Users/Users';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      {/* <LoginForm /> */}
      {/* <Posts /> */}
      <Users />
    </Layout>
  );
};
