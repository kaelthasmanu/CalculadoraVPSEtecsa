import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="inline-flex flex-col items-center gap-3 text-center">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-200">
        <FontAwesomeIcon icon={faServer} className="h-6 w-6" />
      </span>

      <h1 className="text-4xl font-semibold tracking-tight text-white">
        Calculadora de facturación VPS
      </h1>

      <p className="max-w-xl text-sm text-slate-200">
        Ajusta los recursos de tu servidor y obten una estimación de la factura en
        segundos.
      </p>
    </div>
  );
}

export default Header;

