import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.lagalebri.ao",
      lastModified: new Date(),
    },
    {
      url: "https://www.lagalebri.ao/contacto",
      lastModified: new Date(),
    },
    {
      url: "https://www.lagalebri.ao/procurar",
      lastModified: new Date(),
    },
    {
      url: "https://www.lagalebri.ao/servicos",
      lastModified: new Date(),
    },
    {
      url: "https://www.lagalebri.ao/sobre-nos",
      lastModified: new Date(),
    },
    {
      url: "https://www.lagalebri.ao/termos-privacidade",
      lastModified: new Date(),
    },
  ];
}
