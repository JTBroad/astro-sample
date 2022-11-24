
// export const Bob = 2;

export async function get({ params }) {

    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();

    return new Response(JSON.stringify({
        CATFACT:data.fact
    }), 
    {
        status:200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}