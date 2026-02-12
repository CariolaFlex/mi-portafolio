import Link from 'next/link';
import { contactInfo } from '@/data/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-12 px-8 border-t border-border">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-8">
        <div className="text-text-muted">
          © {currentYear} Andrés Cariola. Todos los derechos reservados.
        </div>
        <ul className="flex gap-8 list-none">
          <li>
            <Link
              href="#privacy"
              className="text-text-muted no-underline transition-colors duration-300 hover:text-primary"
            >
              Privacidad
            </Link>
          </li>
          <li>
            <Link
              href="#terms"
              className="text-text-muted no-underline transition-colors duration-300 hover:text-primary"
            >
              Términos
            </Link>
          </li>
          <li>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted no-underline transition-colors duration-300 hover:text-primary"
            >
              Agendar Call
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
