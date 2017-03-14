/* @flow */
import cssifyObject from 'css-in-js-utils/lib/cssifyObject'
import reduce from 'lodash/reduce'

export default function cssifyKeyframe(
  frames: Object,
  animationName: string,
  prefixes: Array<string> = ['']
): string {
  const keyframe = reduce(
    frames,
    (css, frame, percentage) => `${css}${percentage}{${cssifyObject(frame)}}`,
    ''
  )

  return reduce(
    prefixes,
    (cssKeyframe, prefix) => `${cssKeyframe}@${prefix}keyframes ${animationName}{${keyframe}}`,
    ''
  )
}
