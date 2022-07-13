import { timelineHelper } from "../../../api";

async function getStaticProps() {
  const movies = timelineHelper();
  return {
    props: {
      movies,
    },
  };
}

export { getStaticProps };
