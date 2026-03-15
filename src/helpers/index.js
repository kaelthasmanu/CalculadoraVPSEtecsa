const CONVERT = 1024;
const PRICE_RAM = 0.05;
const PRICE_DISK = 0.01;
const PRICE_CPU = 0.04;

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'CUP',
});

const formatMoney = (value) => `${formatter.format(value)} $`;

const calculateTotal = (ram, cpu, disk, time) => {
  const multiplier = time === 1 ? 24 : time === 7 ? 168 : 720;

  const totalRam = (ram * PRICE_RAM / CONVERT) * multiplier;
  const totalCpu = (cpu * PRICE_CPU) * multiplier;
  const totalDisk = (disk * PRICE_DISK) * multiplier;

  return [totalRam, totalCpu, totalDisk];
};

export { formatMoney, calculateTotal };
