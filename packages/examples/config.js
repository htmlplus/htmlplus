module.exports = {
  snapshot: './snapshot.json',
  outputs: [
    {
      dist: './dist/javascript',
      key: 'javascript'
    },
    {
      dist: './dist/react',
      key: 'react'
    },
    {
      dist: './dist/vue',
      key: 'vue'
    },
    {
      key: 'github'
    },
    {
      key: 'codesandbox'
    },
    {
      dist: './dist/combine',
      key: 'combine'
    }
  ]
}