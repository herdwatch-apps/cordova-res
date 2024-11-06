module.exports = {
  preset: 'ts-jest',
  transform: {
    "\\.[ts]?$": ['ts-jest', {
      tsconfig: {
        types: [
          "node",
          "jest",
        ],
      },
    }],
  }
};
