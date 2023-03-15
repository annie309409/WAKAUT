import '../styles/globals.css';
import '../styles/boot-added.css';
import Layout from "./layouts/layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
