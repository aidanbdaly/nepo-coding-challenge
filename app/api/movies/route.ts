export function GET() {
    return new Response(
        JSON.stringify({
            message: "Hello from the movies API!",
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}