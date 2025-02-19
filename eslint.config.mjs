import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      'semi': ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }),
];

export default eslintConfig;