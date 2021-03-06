import Head from "next/head";
import { Box } from "@mui/material";

function About({ numMovies }) {
  return (
    <div>
      <Head>
        <title>MCU Timeline | About</title>
      </Head>
      <main>
        <Box>
          If you want to see the Marvel and Avengers movies in order as they
          happened, starting with the World War II-set Captain America: The
          First Avenger, we&apos;ve listed all {numMovies} MCU movies and series
          in chronological order, in one guide!
        </Box>
      </main>
    </div>
  );
}

export { About };
