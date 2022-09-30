const dateParser = (dateStr) => {
  const date = dateStr.slice(0, 10);
  const time = dateStr.slice(11, 16);
  return [date, time];
};

const handleURLParams = (currParams, queryKey, queryValue) => {
  if (!currParams.has(queryKey)) {
    currParams.append(queryKey, queryValue);
  } else {
    currParams.delete(queryKey);
    currParams.append(queryKey, queryValue);
  }
  return currParams;
};

module.exports = { dateParser, handleURLParams };
