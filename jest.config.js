module.exports = {
  // 告訴  Jest 需要匹配的檔案字尾
  moduleFileExtensions: ["js", "vue"],
  // 匹配到.vue 檔案的時候用 vue-jest 處理， 匹配到.js 檔案的時候用 babel-jest 處理
  transform: {
    "^.+\\.vue$": "<rootDir>/node_modules/vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  // 處理  webpack 的別名，比如：將  @ 表示  /src 目錄
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // 將儲存的快照測試結果進行序列化，使得其更美觀
  snapshotSerializers: ["jest-serializer-vue"],
  // 匹配哪些檔案進行測試
  testMatch: ["**/tests/**/*.spec.js"],
  // 不進行匹配的目錄
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
