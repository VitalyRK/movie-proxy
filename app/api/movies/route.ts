const API_KEY = process.env.API_KEY;

export async function POST(request: Request) {
  const body = await request.json();

  console.log(body);

  return new Response("OK.");
}

export async function GET() {
  return new Response("OK!");
}
