import React, { View } from 'react-native';
import { shallow } from 'enzyme';

import HelloWorld from 'components/HelloWorld';
 
describe('<HelloWorld />', () => {
  it('should be a view component', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.type()).to.equal(View);
  });
});