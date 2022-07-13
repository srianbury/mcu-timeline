import { getData } from "./data";

function timelineHelper() {
  return getData();
}

function timelineHandler(req, res) {
  const data = timelineHelper();
  return res.json(data);
}

export { timelineHandler, timelineHelper };
