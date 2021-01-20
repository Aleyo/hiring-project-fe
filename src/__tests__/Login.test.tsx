import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Login } from '../containers/Login';

function renderWithStore(store: any): RenderResult {
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>,
  );
}

describe('Login', () => {
  const mockStore = configureStore();
  const initialState = {
    auth: undefined,
  } as any;

  test('renders Login component', () => {
    const store = mockStore(initialState);

    const { getByTestId } = renderWithStore(store);
    expect(getByTestId('submit').closest('button').disabled).toBeTruthy();
  });

  test('form inputs exist', () => {
    const store = mockStore(initialState);

    const { getByTestId } = renderWithStore(store);

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submit = getByTestId('submit');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submit).toBeTruthy();
  });

  test('submit is disabled when form not filled', () => {
    const store = mockStore(initialState);

    const { getByTestId } = renderWithStore(store);

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');

    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '' } });

    expect(getByTestId('submit').closest('button').disabled).toBeTruthy();
  });

  test('submit is not disabled when form filled', () => {
    const store = mockStore(initialState);

    const { getByTestId } = renderWithStore(store);

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');

    fireEvent.change(emailInput, { target: { value: 'vojta@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'topSecret' } });

    expect(getByTestId('submit').closest('button').disabled).toBeFalsy();
  });
});
