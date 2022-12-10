const NB_DECIMALS = 8;

export const coordinatesGenerator = () => {
  const longitude = (Math.random() * 360 - 180).toFixed(NB_DECIMALS);
  const latitude = (Math.random() * 180 - 90).toFixed(NB_DECIMALS);
  return [latitude, longitude];
};
