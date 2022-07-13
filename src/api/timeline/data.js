// https://editorial.rottentomatoes.com/guide/marvel-movies-in-order/
const data = [
  {
    title: "Captain America: The First Avenger",
    releaseDate: "2011-07-19",
    poster: "https://flxt.tmsimg.com/assets/p8205710_p_v12_aj.jpg",
  },
  {
    title: "Captain Marvel",
    releaseDate: "2019-03-04",
    poster: "https://flxt.tmsimg.com/NowShowing/173234/173234_ab.jpg",
  },
  {
    title: "Iron Man",
    releaseDate: "2008-05-02",
    poster: "https://flxt.tmsimg.com/assets/p170620_p_v8_az.jpg",
  },
  {
    title: "Iron Man 2",
    releaseDate: "2010-05-07",
    poster: "https://flxt.tmsimg.com/assets/p3546118_p_v8_af.jpg",
  },
  {
    title: "The Incredible Hulk",
    releaseDate: "2008-06-13",
    poster: "https://flxt.tmsimg.com/assets/p176337_p_v8_am.jpg",
  },
  {
    title: "Thor",
    releaseDate: "2011-05-02",
    poster: "https://flxt.tmsimg.com/assets/p7989358_p_v8_aa.jpg",
  },
  {
    title: "The Avengers",
    releaseDate: "2012-05-04",
    poster: "https://flxt.tmsimg.com/assets/p8815512_p_v8_ax.jpg",
  },
  {
    title: "Thor: The Dark World",
    releaseDate: "2013-11-08",
    poster: "https://flxt.tmsimg.com/assets/p9530219_p_v8_au.jpg",
  },
  {
    title: "Iron Man 3",
    releaseDate: "2013-05-03",
    poster: "https://flxt.tmsimg.com/assets/p9259486_p_v8_af.jpg",
  },
  {
    title: "Captain America: The Winter Soldier",
    releaseDate: "2014-04-04",
    poster: "https://flxt.tmsimg.com/assets/p9895254_p_v8_an.jpg",
  },
  {
    title: "Guardians of the Galaxy",
    releaseDate: "2014-08-01",
    poster: "https://flxt.tmsimg.com/assets/p10108283_p_v8_aj.jpg",
  },
  {
    title: "Guardians of the Galaxy Vol. 2",
    releaseDate: "2017-05-05",
    poster: "https://flxt.tmsimg.com/NowShowing/152514/152514_aa.jpg",
  },
  {
    title: "Avengers: Age of Ultron",
    releaseDate: "2015-05-01",
    poster: "https://flxt.tmsimg.com/assets/p10745606_p_v8_aq.jpg",
  },
  {
    title: "Ant-Man",
    releaseDate: "2015-06-29",
    poster: "https://flxt.tmsimg.com/assets/p10951814_p_v8_af.jpg",
  },
  {
    title: "Captain America: Civil War",
    releaseDate: "2016-05-06",
    poster:
      "https://resizing.flixster.com/nBBa8qH9lC0v5zJgtpLUwp9W92g=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzllZThmOGM5LTVjZmUtNDQ5Yy04ZjdjLTcyOWEzZWI0N2FlZC53ZWJw",
  },
  {
    title: "Black Widow",
    releaseDate: "2021-07-09",
    poster:
      "https://resizing.flixster.com/UqanC4hHIFolYIKoZ020-YmubCQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRkMWJjZjI2LWE0MDktNDczZC05ZmNiLTIzMTQ0NTE5MGJiMC5qcGc=",
  },
  {
    title: "Spider-Man: Homecoming",
    releaseDate: "2017-07-07",
    poster: "https://flxt.tmsimg.com/assets/p12798844_p_v8_ao.jpg",
  },
  {
    title: "Black Panther",
    releaseDate: "2018-01-29",
    poster:
      "https://resizing.flixster.com/KBlur3LaA-y1U1yt6_Y2uO25ozA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMxOGI1YzBhLWMyMjEtNGUxMS1iM2Q0LWQ4OGMyYzQyZjQyYS53ZWJw",
  },
  {
    title: "Doctor Strange",
    releaseDate: "2016-10-20",
    poster:
      "https://resizing.flixster.com/vK77TbbXQYgkJ2HpvPp1p_W0tj4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FkNDZiMzU2LTFmYTQtNDgwMS1iOWM5LTgxNTg2NDMxNjBmNi53ZWJw",
  },
  {
    title: "Thor: Ragnarok",
    releaseDate: "2017-11-03",
    poster: "https://flxt.tmsimg.com/assets/p12402331_p_v8_ax.jpg",
  },
  {
    title: "Ant-Man and the Wasp",
    releaseDate: "2018-06-25",
    poster:
      "https://resizing.flixster.com/UlqKOFS-XQ9Ds9mlaHODTL_G_ZA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFlMzg5NjYxLWUxYjQtNGZmZS1iZDA5LTA2NzljZDJkMjc4OC53ZWJw",
  },
  {
    title: "Avengers: Infinity War",
    releaseDate: "2018-04-23",
    poster:
      "https://resizing.flixster.com/CXOXbOpLNL1NNkXTQu-4Rgvcszs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM0NGRkMDM2LWVjNDQtNGZlMC04NGM3LWZkMzQ2Njg1OTUyNi53ZWJw",
  },
  {
    title: "Avengers: Endgame",
    releaseDate: "2019-04-26",
    poster:
      "https://resizing.flixster.com/fC7nU6iTRQk02tS0SDS1ylx-G34=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2QxZjE5ZDgzLTRiY2MtNDFkYS04NWQ4LTRkYzc1ZTAwNWE2NC53ZWJw",
  },
  {
    title: "Loki",
    releaseDate: "2021-06-09",
    poster:
      "https://resizing.flixster.com/JJk-m1_kSs4_8hZa-hFoRm3JCkI=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjkxNjQ4Ny53ZWJw",
  },
  {
    title: "What If...?",
    releaseDate: "2021-08-11",
    poster:
      "https://resizing.flixster.com/HJIDhOhxvZOjYZgNTO1Qot5ZGU8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjk3MTk4MS53ZWJw",
  },
  {
    title: "WandaVision",
    releaseDate: "2021-01-15",
    poster:
      "https://resizing.flixster.com/KSmwAP9TODYGVZH4a-OJusb4BxI=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjgzNDc3Ni53ZWJw",
  },
  {
    title: "Shang-Chi and the Legend of the Ten Rings",
    releaseDate: "2021-09-03",
    poster:
      "https://resizing.flixster.com/bZGWzjLoyj0GXIQj8vs-8y0xMIA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY0NWJhN2RhLTg1Y2YtNDBmYS04YjQ0LWI5MWY4NmIwOGRjMy5qcGc=",
  },
  {
    title: "The Falcon and the Winter Soldier",
    releaseDate: "2021-03-19",
    poster:
      "https://resizing.flixster.com/dt434nQxzw0ulYweDZlc-KDiD8o=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjg0MDQ2Mi53ZWJw",
  },
  {
    title: "Spider-Man: Far from Home",
    releaseDate: "2019-06-26",
    poster: "https://flxt.tmsimg.com/NowShowing/177947/177947_ac.jpg",
  },
  {
    title: "Spider-Man: No Way Home",
    releaseDate: "2021-12-17",
    poster:
      "https://resizing.flixster.com/8PNiwC2bpe9OecfYZSOVkvYC5vk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5NGM0Y2Q1LTAyYTItNGFjNC1hNWZhLWMzYjJjOTdjMTFhOS5qcGc=",
  },
  {
    title: "Eternals",
    releaseDate: "2021-11-05",
    poster:
      "https://resizing.flixster.com/p8i7HQcy2h8cS_nZhqAq7eU5S6s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2NjYWQ1NGQ0LTEyMjMtNGFmZi04YjMxLTc0NjQ1Y2VkYzk2MS5qcGc=",
  },
  {
    title: "Hawkeye",
    releaseDate: "2021-11-24",
    poster:
      "https://resizing.flixster.com/ajiVhI1F7LYMJa8ByVtevaVN8pU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNTA0ZGM2MTUtNGFkNy00Y2MwLWI5YjQtNGZkMWUzY2YyZmNiLmpwZw==",
  },
  {
    title: "Moon Knight",
    releaseDate: "2022-03-20",
    poster:
      "https://resizing.flixster.com/zRNYCaXgjlY82FbPjVrLL6KHCgY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvODliYjE0ZmMtNTIyYi00NDdkLWJjZDUtMzIzOGVmOTlmOWMzLmpwZw==",
  },
  {
    title: "Doctor Strange in the Multiverse of Madness",
    releaseDate: "2022-05-06",
    poster:
      "https://resizing.flixster.com/RfZ4YhxZPdnbMcPd9CkitjdSijQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIxODJmNzBkLWE5MDYtNGYyYi1hZGU4LWMyMTFlMTVjODkzMy5qcGc=",
  },
  {
    title: "Thor: Love and Thunder",
    releaseDate: "2022-07-08",
    poster: "https://flxt.tmsimg.com/assets/p12402331_p_v8_ax.jpg",
  },
];

function getData() {
  const formattedData = data.map((movie, index) => ({
    order: index + 1,
    ...movie,
  }));
  return formattedData;
}

export { getData };
