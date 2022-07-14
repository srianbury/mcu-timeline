import { useState } from "react";
import Head from "next/head";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const SORT_ORDERS = {
  CHRON: "CHRON",
  RELEASE: "RELEASE",
};

function Home({ movies }) {
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS.CHRON);

  function handleSortOrderSelectionChange(event) {
    setSortOrder(event.target.value);
  }

  function getSortedMovies() {
    switch (sortOrder) {
      case SORT_ORDERS.RELEASE:
        return movies.sort(
          (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
        );
      case SORT_ORDERS.CHRON:
      default:
        return movies.sort((a, b) =>
          a.order > b.order ? 1 : a.order < b.order ? -1 : 0
        );
    }
  }

  const sortedMovies = getSortedMovies();

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
        <FormControl>
          <FormLabel id="sort-order-radio-buttons-group">Sort</FormLabel>
          <RadioGroup
            row
            aria-labelledby="sort-order-radio-buttons-group"
            name="sort-order-radio-buttons-group"
            value={sortOrder}
            onChange={handleSortOrderSelectionChange}
          >
            <FormControlLabel
              value={SORT_ORDERS.CHRON}
              control={<Radio />}
              label="Chronological"
            />
            <FormControlLabel
              value={SORT_ORDERS.RELEASE}
              control={<Radio />}
              label="Release Date"
            />
          </RadioGroup>
        </FormControl>
        <Timeline position="alternate">
          {sortedMovies.map((movie, index) => (
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
                  <Box
                    sx={{
                      p: 1,
                      m: 1,
                      backgroundColor: "#e0e0e0",
                      display: "inline",
                      borderRadius: "10px",
                    }}
                  >{`#${movie.order}`}</Box>
                </Typography>
                <Box>{movie.releaseDate}</Box>
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
