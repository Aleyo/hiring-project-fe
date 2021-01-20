module.exports = {
  preset: 'ts-jest',
  'moduleDirectories': [
    'node_modules',
    'src',
  ],
  'moduleFileExtensions': [
    'js',
    'json',
    'ts',
    'tsx',
    'jsx',
    'scss',
  ],
  'roots': [
    'src',
  ],
  'testRegex': '.test.(ts|tsx)$',
  'transform': {
    '^.+\\.(ts|js|tsx)?$': 'ts-jest',
  },
  'coverageDirectory': '../coverage',
  'testEnvironment': 'jsdom',
  'moduleNameMapper': {
    'src/(.*)': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
