
export const parseFilmId = (url: string): number=> {
  const result = /films\/(\d+)\/$/.exec(url)
  if (result) {
    return +result[1]
  }
  return -1
}