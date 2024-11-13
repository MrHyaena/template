module.exports = {
  modulePaths: ["/shared/vendor/modules"],
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "bower_components", "shared"],

  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMocks.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMocks.js",
  },
};
