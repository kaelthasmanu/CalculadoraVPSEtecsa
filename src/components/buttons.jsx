import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function StepperButton({ direction, onClick, disabled, ariaLabel }) {
  const icon = direction === 'increment' ? faPlus : faMinus;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed disabled:opacity-40"
    >
      <FontAwesomeIcon icon={icon} className="text-lg" />
    </button>
  );
}

export default StepperButton;
