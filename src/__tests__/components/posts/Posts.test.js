import React from 'react';
import { shallow } from 'enzyme';
import Posts from '../../../components/posts/Posts';

describe('<Posts />', () => {
  it('Returns a list of posts', () => {
    expect.assertions(1);
    expect(shallow(<Posts />)).toMatchSnapshot();
  });
});