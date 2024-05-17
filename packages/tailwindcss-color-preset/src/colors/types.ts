/**
 * tailwindcss color param
 * @example
 * {
 *   DEFAULT: '#409eff',
 *   3: '#79bbff',
 *   5: '#a0cfff',
 *   7: '#c6e2ff',
 *   8: '#d9ecff',
 *   9: '#ecf5ff',
 *   dark: '#337ecc',
 * }
 *
 */
export type Color = string | { [key: string]: string }

/**
 * tailwindcss color param
 * @example
 * 'el-primary': {
 *   DEFAULT: '#409eff',
 *   3: '#79bbff',
 *   5: '#a0cfff',
 *   7: '#c6e2ff',
 *   8: '#d9ecff',
 *   9: '#ecf5ff',
 *   dark: '#337ecc',
 * },
 *
 */
export interface ColorConfig {
  [key: string]: Color
}
