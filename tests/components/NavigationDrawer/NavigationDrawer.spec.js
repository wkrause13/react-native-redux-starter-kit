import React, { View } from 'react-native';
import { shallow } from 'enzyme';

import NavigationDrawer from 'components/NavigationDrawer';

describe('<NavigationDrawer />', () => {
  it('should be a view component', () => {
    const wrapper = shallow(<NavigationDrawer />);
    expect(wrapper.type()).to.equal(View);
  });
});