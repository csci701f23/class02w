const add = function (x, y) {
  return x + y;
};

const getColor1 = function () {
  const color = [240, 198, 41];
  return color;
};

const getColor2 = function () {
  let color = [256, 0, 0];
  return color;
};

const getColor3 = function () {
  const color = [240,128,128];
  return color;
};

const getColor4 = function () {
  const color = [255, 96, 208];
  return color;
};

const getColor5 = function () {
  const color = [168, 80, 50];
  return color;
};

const getColorMap = {
  1: getColor1,
  2: getColor2,
  3: getColor3,
  4: getColor4,
  5: getColor5,
};

const getColor = function (group) {
  if (group in getColorMap) return getColorMap[group]();
  return [255, 255, 255];
};

export { add, getColor };
