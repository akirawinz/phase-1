const CurrentDate = () => {
  return new Date()
    .toLocaleDateString('us-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
    .toString();
};

export default CurrentDate;
