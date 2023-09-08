export function formatSearch(se: string) {
  se = decodeURIComponent(se)
  se = se.substr(1)
  const arr = se.split('&')
  const obj: Record<string, string> = {}
  let newArr = []

  arr.forEach((v, i) => {
    newArr = v.split('=')

    if (typeof obj[newArr[0]] === 'undefined') {
      obj[newArr[0]] = newArr[1]
    }
  })

  return obj
}
