export const cards = [...Array(10)]
  .map((_, i) => i)
  .map((i) => {
    return { title: `title${i}`, content: `content${i}` }
  })
