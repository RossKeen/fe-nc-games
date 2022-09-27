const dateParser = (dateStr) => {
  const date = dateStr.slice(0, 10);
  const time = dateStr.slice(11, 16);
  return [date, time];
};

module.exports = { dateParser };
