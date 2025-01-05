export default (h, d, vt) => {
  const radius = d / 2;
  const length = vt / (Math.PI * Math.pow(radius, 2));

  const segmentArea = (r, h) => {
    return (
      r * r * Math.acos((r - h) / r) - (r - h) * Math.sqrt(2 * r * h - h * h)
    );
  };

  const segmentVolume = segmentArea(radius, h) * length;

  return Math.floor(segmentVolume);
};
