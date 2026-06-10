import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gerador de Certificados de Aniversário" },
      { name: "description", content: "Ferramenta para gerar certificados de aniversário de casa em PDF." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/certificado.html");
  }, []);
  return (
    <div style={{ fontFamily: "system-ui", padding: 40 }}>
      Abrindo ferramenta… <a href="/certificado.html">clique aqui</a> se não redirecionar.
    </div>
  );
}
