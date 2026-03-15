import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/footer.jsx';
import StepperButton from './components/buttons.jsx';
import { formatMoney, calculateTotal } from './helpers';

const PRESETS = {
  0: { label: 'Sin selección', ram: 512, cpu: 1, disk: 20 },
  1: { label: 'VPN (Wireguard)', ram: 512, cpu: 1, disk: 20 },
  2: { label: 'VPN (OpenVPN)', ram: 512, cpu: 1, disk: 20 },
  3: { label: 'VPN (Outline)', ram: 512, cpu: 1, disk: 1024 },
  4: { label: 'RouterOS (Mikrotik)', ram: 512, cpu: 1, disk: 20 },
  5: { label: 'Minecraft', ram: 512, cpu: 1, disk: 20 },
  6: { label: 'World of Warcraft (3.3.5a)', ram: 2048, cpu: 4, disk: 50 },
  7: { label: 'World of Warcraft (4.3.4)', ram: 2048, cpu: 4, disk: 50 },
  8: { label: 'World of Warcraft (5.4.8)', ram: 4096, cpu: 4, disk: 50 },
  9: { label: 'Openfire (Chat)', ram: 4096, cpu: 4, disk: 50 },
  10: { label: 'Nginx (Web / Proxy)', ram: 512, cpu: 1, disk: 20 },
};

const TIME_OPTIONS = [
  { value: 31, label: '1 Mes' },
  { value: 7, label: '1 Semana' },
  { value: 1, label: '1 Día' },
];

function ResourceControl({
  label,
  unit,
  value,
  min,
  max,
  step,
  onChange,
  onDecrement,
  onIncrement,
}) {
  const isMin = value <= min;
  const isMax = value >= max;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-200">{label}</span>
        <span className="text-sm font-semibold text-white">
          {value.toLocaleString()} {unit}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <StepperButton
          direction="decrement"
          onClick={onDecrement}
          disabled={isMin}
          ariaLabel={`Disminuir ${label}`}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="slider"
          aria-label={label}
        />
        <StepperButton
          direction="increment"
          onClick={onIncrement}
          disabled={isMax}
          ariaLabel={`Aumentar ${label}`}
        />
      </div>
    </div>
  );
}

function App() {
  const [ram, setRam] = useState(512);
  const [cpu, setCpu] = useState(1);
  const [disk, setDisk] = useState(20);
  const [time, setTime] = useState(31);
  const [discount, setDiscount] = useState(false);
  const [preset, setPreset] = useState(0);

  const minRam = 512;
  const maxRam = 16384;
  const minCpu = 1;
  const maxCpu = 8;
  const minDisk = 20;
  const maxDisk = 500;

  useEffect(() => {
    const presetValues = PRESETS[preset];
    if (presetValues) {
      setRam(presetValues.ram);
      setCpu(presetValues.cpu);
      setDisk(presetValues.disk);
    }
  }, [preset]);

  const [pagoRam, pagoCpu, pagoDisk] = useMemo(
    () => calculateTotal(ram, cpu, disk, time),
    [ram, cpu, disk, time]
  );

  const factor = discount ? 0.9 : 1;
  const totalRam = Math.round(pagoRam * factor);
  const totalCpu = Math.round(pagoCpu * factor);
  const totalDisk = Math.round(pagoDisk * factor);
  const total = totalRam + totalCpu + totalDisk;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <Header />
          <p className="mt-3 text-sm text-slate-200 max-w-2xl mx-auto">
            Ajusta los recursos de tu VPS y calcula tu factura de manera instantánea.
            Activa el descuento por Transfermóvil para ver el precio con rebaja.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="card">
            <div className="card-header">
              <h2 className="card-title">Configuración del VPS</h2>
              <p className="card-subtitle">
                Ajusta memoria, CPU y disco. Los precios se calculan automáticamente.
              </p>
            </div>

            <ResourceControl
              label="RAM"
              unit="MB"
              value={ram}
              min={minRam}
              max={maxRam}
              step={1}
              onChange={(e) => setRam(Number(e.target.value))}
              onDecrement={() => setRam((prev) => Math.max(prev - 1, minRam))}
              onIncrement={() => setRam((prev) => Math.min(prev + 1, maxRam))}
            />

            <ResourceControl
              label="CPU"
              unit="núcleo(s)"
              value={cpu}
              min={minCpu}
              max={maxCpu}
              step={1}
              onChange={(e) => setCpu(Number(e.target.value))}
              onDecrement={() => setCpu((prev) => Math.max(prev - 1, minCpu))}
              onIncrement={() => setCpu((prev) => Math.min(prev + 1, maxCpu))}
            />

            <ResourceControl
              label="Disco"
              unit="GB"
              value={disk}
              min={minDisk}
              max={maxDisk}
              step={20}
              onChange={(e) => setDisk(Number(e.target.value))}
              onDecrement={() => setDisk((prev) => Math.max(prev - 20, minDisk))}
              onIncrement={() => setDisk((prev) => Math.min(prev + 20, maxDisk))}
            />

            <div className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Periodo
                </label>
                <select
                  className="form-select"
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                >
                  {TIME_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Preset de tecnología
                </label>
                <select
                  className="form-select"
                  value={preset}
                  onChange={(e) => setPreset(Number(e.target.value))}
                >
                  {Object.entries(PRESETS).map(([key, preset]) => (
                    <option key={key} value={key}>
                      {preset.label}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-slate-300">
                  El preset ajusta los valores recomendados para la tecnología seleccionada.
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <div className="card-header">
              <h2 className="card-title">Resumen de la factura</h2>
              <p className="card-subtitle">
                Incluye el descuento por Transfermóvil si está activado.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4">
                <span className="text-sm text-slate-200">RAM</span>
                <span className="text-base font-semibold text-white">
                  {formatMoney(totalRam)}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4">
                <span className="text-sm text-slate-200">CPU</span>
                <span className="text-base font-semibold text-white">
                  {formatMoney(totalCpu)}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4">
                <span className="text-sm text-slate-200">Disco</span>
                <span className="text-base font-semibold text-white">
                  {formatMoney(totalDisk)}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-indigo-500/20 p-4">
                <span className="text-sm font-semibold text-slate-200">Total</span>
                <span className="text-xl font-bold text-white">{formatMoney(total)}</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-4">
                <div className="flex items-center gap-3">
                  <input
                    id="discount-toggle"
                    type="checkbox"
                    checked={discount}
                    onChange={() => setDiscount((prev) => !prev)}
                    className="h-5 w-5 rounded border-white/20 bg-slate-800 text-indigo-400 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="discount-toggle"
                    className="text-sm font-medium text-slate-200"
                  >
                    Descuento Transfermóvil (10%)
                  </label>
                </div>

                {discount && <span className="badge">Aplicado</span>}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
