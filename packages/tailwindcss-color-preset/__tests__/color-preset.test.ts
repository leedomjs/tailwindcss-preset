import { describe, expect, it, test } from 'vitest'
import colorPreset from '../src/index'

describe('color-preset', () => {
  it('should get no config', () => {
    expect(colorPreset(false)).toMatchSnapshot()
  })

  it('should get all configs', () => {
    expect(colorPreset(true)).toMatchSnapshot()
  })

  it('should only get element config', () => {
    expect(colorPreset({ element: true })).toMatchSnapshot()
  })

  it('should only get naive config', () => {
    expect(colorPreset({ naive: true })).toMatchSnapshot()
  })

  it('should only get vant config', () => {
    expect(colorPreset({ vant: true })).toMatchSnapshot()
  })

  it('should get all configs', () => {
    expect(colorPreset({
      element: true,
      naive: true,
      vant: true,
    })).toMatchSnapshot()
  })
})
