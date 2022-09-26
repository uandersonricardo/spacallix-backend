export const getCacheKey = (...args: unknown[]): string => {
  const key = args
    .map(arg => {
      if (typeof arg === "object") {
        return JSON.stringify(arg);
      }
      return arg;
    })
    .join("_");

  return key;
};
