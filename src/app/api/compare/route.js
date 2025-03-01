export async function POST(req) {
    try {
      const { address1, address2 } = await req.json();
  
      // Dummy logic: Compare lowercase addresses
      const match = address1.toLowerCase() === address2.toLowerCase();
      const confidence = match ? 1.0 : 0.7; // Dummy confidence score
  
      return Response.json({ match, confidence });
    } catch (error) {
      return Response.json({ error: "Invalid request" }, { status: 400 });
    }
  }
  
