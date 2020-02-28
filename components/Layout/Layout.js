import Head from 'next/head';
import Navbar from '../Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>2mbi</title>
    </Head>
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;