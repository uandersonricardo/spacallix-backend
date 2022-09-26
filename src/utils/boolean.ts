export const parseBoolean = (value: any): boolean | null => {
  return value?.toString().toLowerCase() === "true"
    ? true
    : value?.toString().toLowerCase() === "false"
    ? false
    : null;
};
