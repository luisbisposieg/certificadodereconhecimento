import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gerador de Certificados de Aniversário de Casa" },
      { name: "description", content: "Crie certificados de aniversário de empresa em PDF ou PNG, individualmente ou em lote via CSV." },
      { property: "og:title", content: "Gerador de Certificados de Aniversário de Casa" },
      { property: "og:description", content: "Crie certificados de aniversário de empresa em PDF ou PNG, individualmente ou em lote via CSV." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/certificado.html"
      title="Gerador de Certificados"
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", border: "none" }}
    />
  );
}
