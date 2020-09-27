import React from 'react';
import { mount } from 'enzyme';
import { Layout } from './../../components/Layout';

describe('Pruebas en <Layout />', () => {
  const wrapper = mount(
    <Layout component="DashboardScreen" title="Test title" img="actionsImg">
      <h2>Testing children</h2>
    </Layout>,
  );

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
