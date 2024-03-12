import { expect, test } from 'vitest'
import { diffSumNumber, diffSum, curValueFixed } from '../src/store.js'

test('test all meters total diff number', () => {
    expect(diffSumNumber(['hotWater-kitchen', 'hotWater-bathroom'])).toBeCloseTo(0.2, 1)
    expect(diffSumNumber(['coldWater-kitchen', 'coldWater-bathroom'])).toBeCloseTo(1.2, 1)
    expect(diffSumNumber(['electricity-day'])).toBeCloseTo(33.0, 1)
    expect(diffSumNumber(['electricity-night'])).toBeCloseTo(8.3, 1)
})

test('test all meters total diff fixed', () => {
    expect(diffSum(['hotWater-kitchen', 'hotWater-bathroom'])).toBe('0.2')
    expect(diffSum(['coldWater-kitchen', 'coldWater-bathroom'])).toBe('1.2')
    expect(diffSum(['electricity-day'])).toBe('33.0')
    expect(diffSum(['electricity-night'])).toBe('8.3')
})


test('curValueFixed', () => {
    expect(curValueFixed('hotWater-kitchen')).toBe('39.1')
    expect(curValueFixed('hotWater-bathroom')).toBe('41.3')
    expect(curValueFixed('coldWater-kitchen')).toBe('39.1')
    expect(curValueFixed('coldWater-bathroom')).toBe('279.8')
})