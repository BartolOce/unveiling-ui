export const useProgress = () => {
  return useState("progress", () => 0);
};
