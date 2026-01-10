import { Heart, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Desenvolvido com</span>
            <Heart
              size={16}
              className="text-red-500 fill-red-500 animate-pulse"
            />
            <span>e</span>
            <Code size={16} className="text-primary-500" />
            <span>por Eliezer Pires</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Cloudflare Pages</span>
          </div>

          <div className="text-sm text-gray-500">
            © {currentYear} Eliezer Pires. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#home"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Voltar ao topo
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://github.com/eliezer-pires/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              Código Fonte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
