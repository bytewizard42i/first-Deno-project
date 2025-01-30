Deno.serve({ hostname: "0.0.0.0", port: 8000 }, (req) => {
    const url = new URL(req.url);
    const path = url.pathname;
  
    if (path === "/hello") {
      return new Response(JSON.stringify({ message: "Hello, World!" })+ "\n", {
        headers: { "Content-Type": "application/json" },
      });
    } else if (path === "/greet") {
      return new Response("Hey John, greetings from Deno!" + "\n", { status: 200 });
    } else if (path === "/data") {
      const data = { id: 1, name: "Alice", role: "Developer", hobbies: ["guitar", "singing", "fighting"] };
      return new Response(JSON.stringify(data) + "\n", {
        headers: { "Content-Type": "application/json" },
      });
    } else if (path === "/time") {
      const currentTime = new Date().toISOString();
      return new Response(JSON.stringify({ time: currentTime + "\n"}), {
        headers: { "Content-Type": "application/json" },
      });
    } else if (path === "/status") {
      return new Response(JSON.stringify({ status: "Server is running smoothly!" + "\n" }), {
        headers: { "Content-Type": "application/json" },
      });
    } else if (path === "/random") {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      return new Response(JSON.stringify({ number: randomNumber + "\n" }), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response("Endpoint not found", { status: 404 });
    }
  });
  