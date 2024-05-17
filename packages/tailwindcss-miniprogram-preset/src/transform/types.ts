/**
 * fraction array
 * @example ['1/2', '1/3']
 */
export type Fraction = Array<string>

/**
 * tailwindcss params
 * @example
 * width: {
 *    '1-dv-2': '50%'
 * }
 *
 */
export interface CommonParam {
  [key: string]: string
}

/**
 * tailwindcss extend params
 * @example
 * extend: {
 *    width: {
 *       '1-dv-2': '50%'
 *    }
 * }
 */
export interface PercentExtend {
  [key: string]: CommonParam
}

/**
 * tailwindcss fontSize params
 * @example
 * lineHeight: {
 *    'sm': {
 *      font-size: 0.875rem;
 *      line-height: 1.25rem;
 *     }
 * }
 */
export interface FontSizeValue {
  [key: string]: [string, { lineHeight: string }]
}
