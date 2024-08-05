import { describe, expect, it, test } from 'vitest'
import { extend, fontSize, lineHeight, spacing } from '../src/transform'
import mpPreset from '../src/index'

describe('miniprogram-preset', () => {
  test('extend', () => {
    expect(extend).toMatchSnapshot()
  })

  test('spacing', () => {
    expect(spacing).toMatchSnapshot()
  })

  test('fontSize', () => {
    expect(fontSize).toMatchSnapshot()
  })

  test('lineHeight', () => {
    expect(lineHeight).toMatchSnapshot()
  })

  test('mpPreset', () => {
    expect(mpPreset({ enable: true })).toMatchSnapshot()
  })

  it('should be no-config', () => {
    expect(mpPreset({ enable: false })).toEqual({
      content: [],
    })
  })
})
