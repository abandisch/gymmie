import React from 'react';
import { shallow } from 'enzyme';
import GraphQLWrapper from './GraphQLWrapper';

describe('<GraphQLWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<GraphQLWrapper><div>test</div></GraphQLWrapper>);
  });
});
