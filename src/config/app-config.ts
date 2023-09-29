export const appConfig = {
  contactos: {
    endereco: {
      geo: process.env.NEXT_PUBLIC_CONTACTOS_ENDERECO_GEO || "",
      display: process.env.NEXT_PUBLIC_CONTACTOS_ENDERECO_DISPLAY,
    },
    telefone: process.env.NEXT_PUBLIC_CONTACTOS_TELEFONE || "",
    email: process.env.NEXT_PUBLIC_CONTACTOS_EMAIL || "",
  },
};
