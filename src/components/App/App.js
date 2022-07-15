// https://nextjs.org/docs/advanced-features/custom-app
import NextHead from "next/head";
import { Container, CssBaseline } from "@mui/material";
import { NavDrawerContextProvider } from "../NavDrawer/NavDrawerContextProvider";
import { NavDrawer } from "../NavDrawer";
import { Header } from "../Header";
import { Footer } from "../Footer";

function App({ Component, pageProps }) {
  return (
    <>
      <NextHead>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>MCU Timeline</title>
        <meta
          name="description"
          content={`MARVEL MOVIES IN ORDER: HOW TO WATCH ALL MCU MOVIES AND SERIES CHRONOLOGICALLY`}
        />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <CssBaseline />
      <NavDrawerContextProvider>
        <Header />
        <NavDrawer />
        <div className="content">
          <Container fixed>
            <Component {...pageProps} />
          </Container>
        </div>
        <Footer />
      </NavDrawerContextProvider>
    </>
  );
}

export { App };
