import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} Calculadora VPS Etecsa · Creado con{' '}
          <span className="text-indigo-400">
            <FontAwesomeIcon icon={faHeart} />
          </span>{' '}
          por Manuel
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://t.me/king_0f_deathhh" className="hover:text-white">
            Telegram
          </a>
          <a href="https://kaelthasmanu.github.io/CalculadoraVPSEtecsa" className="hover:text-white">
            GitHub Pages
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
