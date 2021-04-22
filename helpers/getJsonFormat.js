const GetJson = (value = '', type) => {
  return {
    id: new Date().valueOf(),
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
