import { act, renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { FormEvent } from 'react';
import { expect, it, vi } from 'vitest';
import { UserModel } from '../../../shared/models/user.model';
import { client } from '../../../shared/repositories/client';
import useLoginViewModel from '../view.model';

const axiosMock = new MockAdapter(client);

it('should be able to sign in', async () => {
  const user: UserModel = {
    id: '1',
    email: 'test@mail.com',
    name: 'Test',
  };

  const password = '1234';

  axiosMock.onPost('/sign-in').reply(200, user);

  const { result, waitFor } = renderHook(() => useLoginViewModel());

  act(() => {
    result.current.handlers.setEmail(user.email);
  });

  await waitFor(() => result.current.state.email == user.email);

  act(() => {
    result.current.handlers.setPassword(password);
  });

  await waitFor(() => result.current.state.password == password);

  const formEventMocked = { preventDefault: vi.fn() } as unknown as FormEvent;

  await act(() => result.current.handlers.submit(formEventMocked));

  await waitFor(() => !result.current.state.loading);
  expect(result.current.state.loading).toBe(false);
  expect(result.current.state.email).toBe(user.email);
  expect(result.current.state.password).toBe(password);
  expect(axiosMock.history.post[0].url).toEqual('/sign-in');
  expect(axiosMock.history.post[0].data).toEqual(JSON.stringify({ email: user.email, password }));
  axiosMock.resetHistory();
});

it('should break on sign in', async () => {
  const email = 'test1234@email.com';
  const password = 'password';
  axiosMock.onPost('/sign-in').reply(404, 'User not found');

  global.alert = vi.fn();

  const { result, waitFor } = renderHook(() => useLoginViewModel());

  act(() => {
    result.current.handlers.setEmail(email);
  });

  await waitFor(() => result.current.state.email == email);

  act(() => {
    result.current.handlers.setPassword(password);
  });

  await waitFor(() => result.current.state.password == password);

  const formEventMocked = { preventDefault: vi.fn() } as unknown as FormEvent;

  await act(() => result.current.handlers.submit(formEventMocked));

  await waitFor(() => !result.current.state.loading);
  expect(result.current.state.loading).toBe(false);
  expect(result.current.state.email).toBe(email);
  expect(result.current.state.password).toBe(password);
  expect(axiosMock.history.post[0].url).toEqual('/sign-in');
  expect(axiosMock.history.post[0].data).toEqual(JSON.stringify({ email: email, password }));
  expect(global.alert).toHaveBeenCalledWith('Something went wrong!');
  axiosMock.resetHistory();
});
