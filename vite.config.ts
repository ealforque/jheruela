import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

function getPagesBasePath() {
  const repository = process.env.GITHUB_REPOSITORY

  if (!repository) {
    return '/'
  }

  const [, repoName] = repository.split('/')

  if (!repoName) {
    return '/'
  }

  return repoName.endsWith('.github.io') ? '/' : `/${repoName}/`
}

// https://vite.dev/config/
export default defineConfig({
  base: getPagesBasePath(),
  plugins: [vue(), tailwindcss()],
})
