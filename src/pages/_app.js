import "@/styles/globals.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>ShadowDex</title>
      </Head>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
