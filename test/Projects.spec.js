import { mount } from '@vue/test-utils'
import Projects from '@/components/Projects.vue'

describe('Projects', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Projects)
    expect(wrapper.vm).toBeTruthy()
  })
})
