export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Integra 365",
        "url": "https://www.integra365.digital",
        "logo": "https://www.integra365.digital/logo.png",
        "image": "https://www.integra365.digital/logo.png",
        "description": "Servicios profesionales de mantenimiento eléctrico, sistemas de informática, redes, CCTV y soporte técnico en CDMX.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ciudad de México",
          "addressRegion": "CDMX",
          "addressCountry": "MX"
        },
        "telephone": "+52 155 1234 5678",
        "areaServed": ["CDMX", "Estado de México"],
        "serviceType": [
          "Mantenimiento eléctrico",
          "Instalaciones eléctricas",
          "Sistemas de informática",
          "Redes y cableado estructurado",
          "CCTV y videovigilancia",
          "Soporte técnico"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Integra 365",
        "url": "https://www.integra365.digital",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.integra365.digital/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Integra 365",
        "url": "https://www.integra365.digital",
        "telephone": "+52 155 1234 5678",
        "image": "https://www.integra365.digital/logo.png",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Prolongación Paseo de la Reforma 1015 Piso 1, Col. Santa Fe, Álvaro Obregón",
          "addressLocality": "Ciudad de México",
          "addressRegion": "CDMX",
          "postalCode": "01376",
          "addressCountry": "MX"
        },
        "areaServed": ["CDMX", "Ciudad de México", "Estado de México"],
        "servesCuisine": [],
        "department": [],
        "knowsAbout": [
          "Electrician",
          "ITService",
          "ProfessionalService",
          "CCTV",
          "Cableado estructurado",
          "Soporte técnico"
        ],
        "category": ["Electrician", "ITService"]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.integra365.digital"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servicios",
            "item": "https://www.integra365.digital/servicios"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Eléctrico",
            "item": "https://www.integra365.digital/servicios/electrico"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Informática",
            "item": "https://www.integra365.digital/servicios/informatica"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contacto",
            "item": "https://www.integra365.digital/contacto"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
