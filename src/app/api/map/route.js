export async function GET() {
  const res = await fetch(
    `https://map.barikoi.com/styles/osm-liberty/style.json?key=${process.env.MAP_KEY}`,
    {
      cache: 'force-cache',
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return Response.json(data);
}
