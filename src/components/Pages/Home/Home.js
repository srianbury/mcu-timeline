import Head from "next/head";
import { Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>MCU Timeline</title>
        <meta
          name="description"
          content={`MARVEL MOVIES IN ORDER: HOW TO WATCH ALL ${movies.length} MCU MOVIES AND SERIES CHRONOLOGICALLY`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Timeline position="alternate">
          {movies.map((movie, index) => (
            <TimelineItem key={movie.title}>
              <TimelineSeparator>
                <TimelineDot />
                {index === movies.length - 1 ? null : <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {movie.title}
                </Typography>
                <Box>{`${movie.releaseDate}`}</Box>
                <Box>{`Watch Order: ${movie.order}`}</Box>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  loading="lazy"
                  style={{
                    height: "250px",
                    width: "auto",
                  }}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </main>
    </div>
  );
}

export { Home };
