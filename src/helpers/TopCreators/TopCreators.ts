export const getTopCreators = (creators: any[]) => {
  const finalCreators: { seller: any; total: any }[] = [];
  const finalResults = creators.reduce((index, currentValue) => {
    (index[currentValue.seller] = index[currentValue.seller] || []).push(
      currentValue
    );
    return index;
  }, {});
  Object.entries(finalResults).forEach((item) => {
    const seller = item[0];
    const total = item[1]
      .map((newItem: any) => Number(newItem.price))
      .reduce(
        (previousValue: any, currentValue: any) => previousValue + currentValue,
        0
      );

    finalCreators.push({ seller, total });
  });
  return finalCreators;
};
