import { Section } from "@/components/shared/section";
import { Card } from "./card";

export function HomeMelhoresImoveis() {
  return (
    <Section backgroundColor="white" className="flex-col justify-center">
      <h3 className="relative text-center text-3xl font-bold text-black">
        Encontre os Melhores Imóveis
      </h3>
      <div className="mt-10 flex justify-center gap-14">
        <Card
          title="Residência em Alturas"
          price="100K Kz"
          location="Angola, Luanda, Viana, Zango"
          rating={4.8}
          views={100}
          image="https://s3-alpha-sig.figma.com/img/cd84/f9fc/f0a644702cc559fd3aa4c66b352e0081?Expires=1698624000&Signature=hr0S3mdcvGOc5SZJA2hQhueq9FIn4KqkL0jLa2YDYrRx8Khiux7ZCm4zhJF5bUW7mg4ALnC65qi7ZpsNEoEIfLSWmaSTtUBQGUO9uL49~dg3uvsDALDC9qGcpFG8O8q3-Mm~IA4DY-qUPG4R~BogSiBbEj4uOmh4WIig1Jr5OBGzKq0pHlid~9B11m1fkOq-Ecbi1yllCeTMJa3OXuADJd0ZLbmNR16-xCRel-c5MJ5-Rae0pcP~-W5NUyWsAExuEnnUKLxVMp~K2gJCPMQBwpgju0hHoj5kwh9Ca8lJujUylHpLDz0tNSGfJ2kLs06H~f0z8mm1I61xOG00sitm9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Card
          title="Residência em Alturas"
          price="100K Kz"
          location="Angola, Luanda, Viana, Zango"
          rating={4.8}
          views={100}
          image="https://s3-alpha-sig.figma.com/img/b3df/5260/d5da5d1a62ed5f58c7cb2f3de0b35d8e?Expires=1698624000&Signature=G~EPPER1vANo885UH1TiqCuc8b-KdksQvtCxh55ZxCu5PsiCNWMOy1Mwb2f7jSNsR0E7IYnuI-VZM93qVXNpXltHpnjcRdwLN7SfngDLFxe8qBvwuvA-N6ZqnfwSXOu~H~mrg2o7FBfunRxK6mEPAcPdxGkP5z~gMXC0yo2n9TKTAyNdr747qEz1pQBR2p2hHtSHTwL4lzVnZdLsMUfnEBLk7yFjkxLRqNIaomMdv-ongGmxg7JPY~WMOB5fhJDokukBXzOLIokaN5jOney8j-3hZ31lAHMYqcP-~QDLIyAyCzwoAazeTtiyEf4eK-QKsqzGpCFm03d7oZ08SYYNMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Card
          title="Residência em Alturas"
          price="100K Kz"
          location="Angola, Luanda, Viana, Zango"
          rating={4.8}
          views={100}
          image="https://s3-alpha-sig.figma.com/img/79d5/2330/845ff74e443536649871e631f43cfeba?Expires=1698624000&Signature=ZEGwVpVYB1hkBfxP8-fxqfWG0A0~X0oUM2QUWSIu2UQo5FcONcFVciwg1I9WODRHHyJ56lnbd3Xe1i85Zm47oDSRYYGnpaYTiu0yrIMQ4cw-tx6rYh2wEOyHzCci82gAYDdpyQ97chauNFC9~WAf2jJj0lIYmhxNJw-jJYQebOVvP3By7CmUDDBEtUTCOF72X~pnCPQfDJCPEEzS9dzmuQ8JmQAH0qT3-z9uv5FTQ0iLF6FXkzhMh9zdtQbV0DYbk5IOUhXWprVvxfFfzIo3G5NJtZ8~E4kAQOm-ux9cA5MizxWBlzbLuxQdESI~pLY9yhgWf8UjJowGreq2ESaiNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
    </Section>
  );
}
