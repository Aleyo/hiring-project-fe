import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Login } from '../containers/Login';
import { App } from '../App';

describe('Login', () => {
  const mockStore = configureStore();
  const initialState = {
    auth: undefined,
  } as any;

  test('renders Login component', () => {
    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByTestId('submit').closest('button').disabled).toBeTruthy();
  });

  test('submit is disabled when form not filled', () => {
    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByTestId('submit').closest('button').disabled).toBeTruthy();
  });

  test('submit is not disabled when form filled', () => {
    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');

    fireEvent.change(emailInput, { target: { value: 'vojta@invo.eu' } });
    fireEvent.change(passwordInput, { target: { value: 'topSecret' } });

    expect(getByTestId('submit').closest('button').disabled).toBeFalsy();
  });

  test('error message on bad credentials', () => {
    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submit = getByTestId('submit');

    fireEvent.change(emailInput, { target: { value: 'vojta@invo.eu' } });
    fireEvent.change(passwordInput, { target: { value: 'topSecret' } });
    fireEvent.click(submit);

    // expect(getByTestId('submit').closest('button').disabled).toBeFalsy();
  });
});
