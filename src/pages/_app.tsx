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
          title: "Minaroid",
          description:
            "Experienced software engineer with 5 years of experience in mobile and web development, specializing in fintech, e-commerce, healthcare, and entertainment industries. I have worked with cross-functional teams and agile methodologies to deliver high-quality software solutions. Proficient in serverless and microservices architectures, I have utilized various programming languages and cloud computing platforms to develop scalable and secure applications. My passion lies in delivering innovative solutions that align with business objectives and exceed customer expectations. I am dedicated to staying updated with the latest trends and technologies in software engineering to ensure continuous growth and improvement.",
          openGraph: {
            type: "website",
            locale: "en_US",
            site_name: "Minaroid",
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
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
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
