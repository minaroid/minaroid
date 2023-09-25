import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { Box } from "@material-ui/core";
import AppHeader from "@/components/app-header/app.header";

function MyApp({ Component, pageProps }: AppProps) {
  const defaultContent = (
    <>
      <div
        style={{
          backgroundColor: "#000000",
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        {/* <AppHeader /> */}
        <Box flexGrow={1} minHeight="50vh">
          <Component {...pageProps} />
        </Box>
      </div>
    </>
  );
  return (
    <>
      <DefaultSeo
        {...{
          title: "Minaroid - Mina George (Software Engineer)",
          description:
            "Experienced software engineer with 5 years of experience in mobile and web development, specializing in fintech, e-commerce, healthcare, and entertainment industries.",
          openGraph: {
            type: "website",
            locale: "en_US",
            site_name: "Minaroid - Mina George (Software Engineer)",
            images: [],
          },
        }}
      />
      <Head>
        <meta name="theme-color" content="#FFF" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="shortcut icon" href="/static/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/static/favicon.ico" sizes="16x16" />
        <link rel="apple-touch-icon" href="/static/favicon.ico" sizes="16x16" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar" content="#000000" />
        <meta
          name="keywords"
          content="minaroid,software,engineer,android,ios,aws,serverless,micro services,flutter"
        />
      </Head>

      {defaultContent}
    </>
  );
}

export default MyApp;
