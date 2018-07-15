import React from 'react'

const radius = 11
const rad = a => Math.PI * a / 180
const round = n => Math.round(n * 1000) / 1000
const rx = (r, a) => round(r * Math.cos(rad(a)))
const ry = (r, a) => round(r * Math.sin(rad(a)))
const num = n => (n < 0.0000001) ? 0 : n

const offset = 90
const getPoints = length => Array.from({ length })
  .map((n, i) => {
    const a = 360 / length * i - offset
    const x = rx(radius, a)
    const y = ry(radius, a)
    return { x, y }
  })

const points = getPoints(6)

const [ a, b, c, d, e, f ] = points

const shape = points => points
  .map(({ x, y }, i) => [
    (i === 0 ? 'M' : 'L'),
    x,
    y
  ].join(' '))
  .join(',')

const A = shape(points)
const B = shape([ b, c, d, e, f ])
const C = shape([ b, c, d, e ])
const D = shape([ b, c, d ])

const styles = {
  a: {},
  b: {
    fill: 'magenta',
    mixBlendMode: 'screen',
    opacity: 1/4
  },
  c: {
    fill: 'magenta',
    mixBlendMode: 'screen',
    opacity: 1/4
  },
  d: {
    fill: 'magenta',
    mixBlendMode: 'screen',
    opacity: 1/2
  },
}

export default class extends React.Component {
  static defaultProps = {
    size: 256
  }

  render () {
    const { size } = this.props
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='-12 -12 24 24'
        width={size}
        height={size}>
        <path d={A} />
        <g transform='rotate(180)'>
          <path d={B} style={styles.b} />
          <path d={C} style={styles.c} />
          <path d={D} style={styles.d} />
        </g>
      </svg>
    )
  }
}
