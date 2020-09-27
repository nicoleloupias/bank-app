import React from 'react';
import { shallow } from 'enzyme';
import { Movement } from '../../components/Movement';

describe('Pruebas en <Movement />', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(
      <Movement
        receiver="Test receiver"
        sender="Test sender"
        quantity="40"
        date="Date test"
        action="Deposit"
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
