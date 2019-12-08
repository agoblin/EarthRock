import { write, read } from "/util/store.js"
import Color from "color"

export const IS_DEV = read(window.location.host === `localhost:5000`)
export const SOUND_ON = write(false)

export const SVELTE_ANIMATION = write({ delay: 100, duration: 300 })

export const TIME_TICK_RATE = write(100)

export const WEAVE_EXPLORE_OPEN = write(false)

export const INPUT_SCROLL_STRENGTH = write(10)
export const INPUT_ZOOM_STRENGTH = write(0.01)
export const INPUT_ZOOM_MIN = write(0.1)

export const TILE_COUNT = read(1024)
export const TILE_COLUMNS = read(32)

export const THEME_BG = write(`#533118`)
export const THEME_GLOW = write(`green`)

export const THEME_BORDER = read(``, (set) =>
  THEME_BG.listen(($THEME_BG) => set(Color($THEME_BG)
    .darkenByRatio(0.5)
    .toCSS()
  ))
)
