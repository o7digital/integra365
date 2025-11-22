const baseUrl = "https://www.integra365.digital";

const urls = [
  { loc: `${baseUrl}/`, priority: "1.0" },
  { loc: `${baseUrl}/servicios`, priority: "0.8" },
  { loc: `${baseUrl}/servicios/electrico`, priority: "0.8" },
  { loc: `${baseUrl}/servicios/informatica`, priority: "0.8" },
  { loc: `${baseUrl}/servicios/cableado`, priority: "0.8" },
  { loc: `${baseUrl}/contacto`, priority: "0.7" }
];

function buildXml() {
  const items = urls
    .map(
      ({ loc, priority }) => `
  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

export async function GET() {
  const body = buildXml();
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
