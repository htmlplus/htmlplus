export const COUNTER_EASINGS = {
  linear(currentTime: number, beginningValue: number, changeInValue: number, duration: number): number {
    return (changeInValue * (-Math.pow(2, (-10 * currentTime) / duration) + 1) * 1024) / 1023 + beginningValue;
  }
};
