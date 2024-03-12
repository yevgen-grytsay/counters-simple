import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

test('it works', () => {
    const wrapper = mount(App)
    expect(wrapper.find('.grand-total-row').text()).toContain('Всього: 1718.05 грн.')
})
