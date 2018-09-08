
export const parseFilmId = (url: string): number=> {
  const result = /films\/(\d+)\/$/.exec(url)
  if (result) {
    return +result[1]
  }
  return -1
}

export const parseCharacterId = (url: string): number=> {
  const result = /people\/(\d+)\/$/.exec(url)
  if (result) {
    return +result[1]
  }
  return -1
}

export const parsePlanetId = (url: string): number=> {
  const result = /planets\/(\d+)\/$/.exec(url)
  if (result) {
    return +result[1]
  }
  return -1
}