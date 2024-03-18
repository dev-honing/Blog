// app/api/test/route.js

export async function GET() {
  const res = {
    Test: {
      "id": 1,
      "Greet": "Hello, Next API!",
      "method": "GET",
      "path": "/api/test"
    }
}
return Response.json(res)
}
