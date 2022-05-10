module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    amd: true
  },
  globals: {
    TDict: true,
    TAnyType: true,
    TAnyArray: true,
    TAny: true,
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'vue'],
      },
    },
  },
  plugins: ['prettier'],
  rules: {
    // 0表示不不处理，1表示警告，2表示错误并退出
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为多字
    '@typescript-eslint/no-unused-vars': 2,
    'camelcase': 1, // 驼峰命名
    'prettier/prettier': 0, // 会优先采用prettierrc.json的配置，不符合规则会提示错误
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off', // 优先export default导出
    'no-param-reassign': 'off', // 函数参数属性的赋值
    'semi': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-unused-expressions': 'off', // 联式调用使用?
    'import/no-cycle': 'off', // 导入循环引用报错
    'arrow-parens': 'off', // 箭头函数一个参数可以不要括号
    'no-underscore-dangle': 'off', // 无下划线
    'no-plusplus': 'off', //  使用一元运算符
    'object-curly-newline': 'off',
    'no-restricted-syntax': 'off', // 使用for of
    'operator-linebreak': 'off', // after
    'arrow-body-style': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // ts每个函数都要显式声明返回值
    // 暂时屏蔽检测@别名
    'import/no-useless-path-segments': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 10 }],
    'linebreak-style': [0, 'error', 'windows'],
    'no-shadow': 'off', // 注意你必须禁用基本规则，因为它可以报告不正确的错误
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ] // 强制在关键字前后使用一致的空格
  }
}
