import styles from "./layout.module.css";
import Head from "next/head";
import Image from "next/image";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";

//global variables
const name = "Thabo Matlhoko";
export const siteTitle = "NextJs Sample Project(blog)";

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learning how to build a blog in NextJs"
          />
          <meta property="og:image" content={``} />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/img/profile.jpg"
                className={utilStyle.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <h2 className={utilStyle.heading2Xl}>
                <Link href={"/"} className={utilStyle.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/img/profile.jpg"
                  className={utilStyle.borderCircle}
                  height={144}
                  width={144}
                  alt=""
                />
              </Link>
              <h2 className={utilStyle.headingLg}>
                <Link href={"/"} className={utilStyle.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main> {children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href={"/"}>Back to home</Link>
          </div>
        )}
      </div>
    </>
  );
}
