const API_KEY = process.env.API_KEY;

export async function POST(request: Request) {
  const body = await request.json();

  const textQuery = body.searchField
    ? `&with_text_query=${body.searchField}`
    : "";
  const textGenres =
    body.genres && body.genres?.length >= 1
      ? `&with_genres=${body.genres.join("%2C")}`
      : "";
  const textYear = body.release ? `&primary_release_year=${body.release}` : "";
  const textVoteGte = body.voteAverageGte
    ? `&vote_average.gte=${body.voteAverageGte}`
    : "";
  const textVoteLte = body.voteAverageLte
    ? `&vote_average.lte=${body.voteAverageLte}`
    : "";

  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US" +
    `&page=${body.page ?? 1}${textYear}&sort_by=${
      body.sortBy
    }${textQuery}${textVoteGte}${textVoteLte}${textGenres}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  const data = await response.json();

  return new Response(data);
}

export async function GET() {
  return new Response("OK!");
}
