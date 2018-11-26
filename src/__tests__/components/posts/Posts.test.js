import React from 'react';
import { shallow, mount } from 'enzyme';
import Posts from '../../../components/posts/Posts';

describe('<Posts />', () => {
  // Snapshot Test
  it('Matches snapshot', () => {
    expect.assertions(1);
    expect(shallow(<Posts />)).toMatchSnapshot();
  });

  // Returns state as an array
  it('Returns an array', () => {
    const wrapper = mount(<Posts />);
    expect(wrapper.state().posts).toEqual([]);
  });
});
