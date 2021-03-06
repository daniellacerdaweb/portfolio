import '../styles/index.css';
import Provider from '../providers';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
