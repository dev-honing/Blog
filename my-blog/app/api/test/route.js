// app/api/route.js

export async function GET() {
  const res = {
    test: {
      "id": 1,
      "category": "Programming",
      "dateTime": "2022-01-01T00:00:00Z",
      "title": "Next.js Starts",
      "tags": ["Next.js", "React", "JavaScript"],
    }
}
return Response.json(res)
}
