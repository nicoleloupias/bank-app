import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LandingScreen } from './../../screens/LandingScreen';
import { mount } from 'enzyme';

describe('Pruebas en <LandingScreen />', () => {
  const wrapper = mount(
    <MemoryRouter>
      <LandingScreen />
    </MemoryRouter>,
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
