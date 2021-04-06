exports.areaOfCircle = (radius) => {
  if (typeof radius !== 'number') return 0;
  if (radius < 0) return 0;
  return Math.PI*radius*radius;
}

exports.isStartWithUppercase = (string = '') => {
  if (typeof string !== "string") return false;
  return /[A-Z]/.test(string.charAt(0));
}
