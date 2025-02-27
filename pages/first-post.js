import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnLoad"
          onLoad={console.log(
            `script loaded successfully, window.FB has been populated`
          )}
        ></Script>
        <h1>First Post</h1>
        <h2>
          <Link href={"/"}>Back to Home</Link>
        </h2>
      </Layout>
    </>
  );
}
