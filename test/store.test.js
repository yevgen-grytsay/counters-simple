import { expect, test } from 'vitest'
import { diffSumNumber, diffSum } from '../src/store.js'

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
