const str_color = (str) => {
  let hash = 0
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  var color = `#`
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF
    color += (`00` + value.toString(16)).substr(-2)
  }
  return color
}

export const color = str_color

const words = [
  `groovy`, `cat`, `bird`, `dog`, `poop`, `cool`, `not`, `okay`, `great`, `terrible`, `wat`,
  `goblin`, `life`, `ferret`, `gregert`, `robert`, `zilla`, `red`, `shirt`, `pants`, `blue`,
  `luna`, `ember`, `embear`, `lunatic`, `boring`,
  `under`, `near`, `near`, `quaint`, `potato`, `egg`, `bacon`, `narwhal`, `lamp`, `stairs`, `king`
]

export const random = (count) => Array
  .from(new Array(count))
  .map(() => Math.floor(Math.random() * words.length))
  .map((i) => words[i])
  .join(` `)
