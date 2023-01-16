import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
import { LoginForm } from './components/LoginForm/LoginForm';
// import { Posts } from './components/Posts/Posts';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <LoginForm />
      {/* <Posts /> */}
    </Layout>
  );
};
