import { NextResponse } from "next/server";

const API_KEY = process.env.API_KEY;

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos&language=en-US/`
  );

  const data = await response.json();

  return NextResponse.json(data, { status: 200 });
}
