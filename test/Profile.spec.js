import { mount } from '@vue/test-utils'
import Profile from '@/components/Profile.vue'

describe('Profile', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Profile)
    expect(wrapper.vm).toBeTruthy()
  })
})
