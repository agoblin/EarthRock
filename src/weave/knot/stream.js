import { write, read } from "/util/store.js"

export default ({
  value = null
}) => {
  const v = write()
  const set = v.set

  v.set = (val) => {
    try {
      set(JSON.parse(val))
    } catch (ex) {
      set(val)
    }
  }
  v.set(value)
  return ({
    knot: read(`stream`),
    value: v
  })
}
