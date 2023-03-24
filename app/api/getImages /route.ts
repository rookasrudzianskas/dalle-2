export async function GET(request: Request) {
  const response = await fetch(
    "https://sonnytestapp.azurewebsites.net/api/getImages",
    {
      cache: "no-store",
    }
  );

  const blog = await response.json();
  const textData = await response.text();

  const data = JSON.parse(textData);

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
