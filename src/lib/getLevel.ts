export const getLevel = (score: number) => {
  if (score <= 8) {
    return " Beginner A1-A2";
  } else if (score <= 16) {
    return " Intermediate B1";
  } else if (score <= 22) {
    return "Upper-intermediate B2";
  } else if (score <= 25) {
    return " Advanced C1";
  }
};
