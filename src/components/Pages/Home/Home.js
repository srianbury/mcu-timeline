import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
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
  CHRON: "chron",
  RELEASE: "release",
};

function Home({ movies }) {
  const router = useRouter();
  const { sort } = router.query;
  const [sortOrder, setSortOrder] = useState(setSortOrderHelper(sort));

  function handleSortOrderSelectionChange(event) {
    router.push(`?sort=${event.target.value}`, undefined, {
      shallow: true,
    });
  }

  function getSortedMovies() {
    switch (sortOrder) {
      case SORT_ORDERS.RELEASE.toLowerCase():
        return movies.sort(
          (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
        );
      case SORT_ORDERS.CHRON.toLowerCase():
      default:
        return movies.sort((a, b) =>
          a.order > b.order ? 1 : a.order < b.order ? -1 : 0
        );
    }
  }

  // set the sort order to the value from the query param if it's in our list of options (SORT_ORDERS)
  function setSortOrderHelper(value) {
    return value && value.toUpperCase() in SORT_ORDERS
      ? value.toLowerCase()
      : SORT_ORDERS.CHRON;
  }

  useEffect(() => {
    setSortOrder(setSortOrderHelper(sort));
  }, [sort]);

  return (
    <div>
      <Head>
        <title>MCU Timeline</title>
        <meta
          name="description"
          content={`MARVEL MOVIES IN ORDER: HOW TO WATCH ALL ${movies.length} MCU MOVIES AND SERIES CHRONOLOGICALLY`}
        />
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
          {getSortedMovies().map((movie, index) => (
            <TimelineItem key={movie.title} id={movie.order}>
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
