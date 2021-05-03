/**
 * @type {{val: Uint8Array[]}}
 */
let values = { val: [] }

const colour2 = (val) => 200 - Math.max(val - 255, 0)
const templates = [(val) => `rgb(${val}, ${colour2(val)}, 50)`]

setTimeout(() =>
getMicrophone(values), 10)
const duck = () => document.getElementById('duck')
setInterval(() => {
  const realWaves = values.val.slice(0, values.val.length / 32)
  //console.log(realWaves.length)
  if (!!duck()) {
    const allParts = [...duck().getElementsByTagName('span')]
    allParts.forEach((part, i) => {
      part.setAttribute(
        'style',
        `color: ${templates[i % templates.length](
          (realWaves
            .slice(
              (i * realWaves.length) / allParts.length,
              ((i + 1) * realWaves.length) / allParts.length
            )
            .reduce((a, b) => a + b, 0) /
            realWaves.length) *
            50 +
            100
        )}`
      )
    })
  }
}, 1)
