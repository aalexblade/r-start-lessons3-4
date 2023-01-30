// import { Banner } from './components/Banner/Banner';
import { Header } from './components/Layout/Header/Header';
import { Layout } from './components/Layout/Layout';
import { Timer } from './components/Timer/Timer';
// import { LoginForm } from './components/LoginForm/LoginForm';
// import { PostsLoader } from './components/Posts/components/PostsLoader';
// import { Users } from './components/Users/Users';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      {/* <LoginForm />
      <PostsLoader /> */}
      {/* <Users /> */}
      {/* <Banner /> */}
      <Timer />
    </Layout>
  );
};
