import { timelineHelper } from "../../../api";

async function getStaticProps() {
  const movies = timelineHelper();
  return {
    props: {
      numMovies: movies.length,
    },
  };
}

export { getStaticProps };
