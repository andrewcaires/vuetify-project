import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([

  {
    "languageOptions": {
      "globals": {
        "defineNuxtConfig": true,
      },
    },
  },
  {
    "name": "app/files-to-lint",
    "files": ["**/*.{ts,mts,tsx,vue}"],
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "no-undef": ["error"],
      "no-multi-spaces": ["error"],
      "no-unused-vars": ["warn"],
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "vue/first-attribute-linebreak": "off",
      "vue/multi-word-component-names": "off",
      "vue/no-unused-vars": ["warn", {
        "ignorePattern": "^_",
      }],
    },
  },

]);
