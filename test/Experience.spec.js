import { mount } from '@vue/test-utils'
import Experience from '@/components/Experience.vue'

describe('Experience', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Experience)
    expect(wrapper.vm).toBeTruthy()
  })
})
