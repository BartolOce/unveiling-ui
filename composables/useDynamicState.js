export const useDynamicState = (stateName, initialValue) => {
  return useState(stateName, () => initialValue);
};
