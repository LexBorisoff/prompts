import lexjs from '@lexjs/eslint-plugin';
import { useIgnoreFile } from '@lexjs/eslint-plugin/utils';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['lib'] },
  useIgnoreFile('.gitignore', import.meta),
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
