import { expect, test } from 'vitest'
import { diffSumNumber } from '../src/store.js'

test('test all meters total diff', () => {
    expect(diffSumNumber(['hotWater-kitchen', 'hotWater-bathroom'])).toBeCloseTo(0.2, 1)
    expect(diffSumNumber(['coldWater-kitchen', 'coldWater-bathroom'])).toBeCloseTo(1.2, 1)
    expect(diffSumNumber(['electricity-day'])).toBeCloseTo(33.0, 1)
    expect(diffSumNumber(['electricity-night'])).toBeCloseTo(8.3, 1)
})
