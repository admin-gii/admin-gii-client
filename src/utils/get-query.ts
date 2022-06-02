export const parseQueryToString = (search: string) => {
  const query = search.substring(1);
  return query.split('&').reduce<Record<string, any>>((acc, item) => {
    const pair = item.split('=');
    const key = decodeURIComponent(pair?.[0]);
    const value = decodeURIComponent(pair?.[1]);
    if (acc[key]) {
      if (Array.isArray(acc[key])) {
        acc[key].push(value);
      } else {
        acc[key] = [acc[key], value];
      }
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
};
