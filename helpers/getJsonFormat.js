const GetJson = (data, value = '', type) => {
  let id;
  if (data.length === 0) {
    id = 1;
  } else {
    const getLastArrId = data[0].id;
    id = getLastArrId + 1;
  }
  return {
    id,
    value,
    currentTime:
      'Added on ' +
      new Date()
        .toLocaleDateString('us-TH', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        })
        .toString(),
    type,
  };
};

export default GetJson;
