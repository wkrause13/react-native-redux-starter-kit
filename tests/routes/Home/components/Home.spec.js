import React, { View } from 'react-native';
import { shallow } from 'enzyme';

import Home from 'routes/Home/components/Home';
 
describe('<Home />', () => {
  it('should be a view component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.type()).to.equal(View);
  });
});