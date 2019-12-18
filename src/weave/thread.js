const knots = {
  stream: (k) => JSON.stringify(k.value.get()),
  math: (k) => k.math.get().trim(),
  mail: (k) => k.whom.get().trim(),
  default: (k) => k.knot.get(),
  stitch: (k) => `./${k.name.get()}`
}

const knots_is = {
  mail: (data) => {
    const ms = data.match(Wheel.REG_ID)
    if (!ms || ms.length !== 1) return false
    if (ms[0] !== data) return false
    return true
  },
  stream: (data) => {
    try {
      JSON.parse(data)
      return true
    } catch (ex) {
      return false
    }
  }
}

const knots_create = {
  math: (data) => ({
    knot: `math`,
    math: data
  }),
  mail: (data) => ({
    knot: `mail`,
    whom: data
  }),
  stream: (data) => ({
    knot: `stream`,
    value: JSON.parse(data)
  })
}

const what_is = (data) => {
  const entries = Object.entries(knots_is)
  for (let i = 0; i < entries.length; i++) {
    const [type, fn] = entries[i]
    if (fn(data)) return type
  }
  return `math`
}

const knot_create = (data) =>
  knots_create[what_is(data)](data)

export const translate = (k, weave) => {
  if (k[0] === `#`) return k

  const knot = weave.knots.get()[k]
  if (!knot) return `stitch`

  const type = knot.knot.get()

  return knots[type]
    ? knots[type](knot)
    : type
}

export const compile = (code, weave, address) => {
  const parts = code
    .replace(/[\r\n]/g, ``)
    .split(`=>`)
    .reverse()

  const threads_update = weave.threads.get()
  const knots = weave.knots.get()

  weave.chain(address).forEach((id) => {
    delete knots[id]
    delete threads_update[id]
  })

  weave.knots.set(knots)

  let connection = address

  // lets make a bunch of math knots
  parts.forEach((part) => {
    part = part.trim()

    if (part === ``) return

    const w_data = knot_create(part)

    const k = weave.add(w_data)

    threads_update[k.id.get()] = connection
    connection = k.id.get()
  })

  weave.threads.set(
    threads_update
  )

  weave.validate()
  const n = weave.name.get()
  if (Wheel.running.get()[n]) {
    Wheel.restart(n)
  }
}

export const format = (txt) => {
  txt = txt.split(`;`)

  txt = txt
    .map((i, k) => {
      i = i.trim()
      if (k !== txt.length - 1) {
        i += `;`
      }
      if (k === txt.length - 2) {
        i += `\r\n`
      }
      return i
    })
    .join(`\r\n`)

  txt = txt
    .split(`=>`)
    .join(`\r\n\r\n=>`)

  return txt
}

export const condense = (link, weave) => {
  const t = translate(link, weave).split(`;`)
  const v = t.pop().trim()
  return t.length > 0
    ? `#${t.length} ${v}`
    : v
}
