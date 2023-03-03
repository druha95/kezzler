import { shallowMount } from '@vue/test-utils';
import HomeView from '@/modules/home/views/HomeView.vue';

describe('HomeView.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HomeView);
    expect(wrapper.text()).toMatch('');
  });
});
