import lexjs from '@lexjs/eslint-plugin';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['prompts'] },
  lexjs.configs.recommended,
  lexjs.configs.typescript,
  {
    rules: {
      '@typescript-eslint/no-require-imports': [
        'error',
        {
          allowAsImport: true,
        },
      ],
    },
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs'],
        },
      },
    },
  },
);
