import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;