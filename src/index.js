export default {
  fetch(request) {
    return new Response(
      JSON.stringify({
        ok: true,
        service: "fass-atlas",
        edge: true,
        ts: new Date().toISOString()
      }, null, 2),
      {
        headers: { "content-type": "application/json" }
      }
    );
  }
};
