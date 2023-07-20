import renderer from 'react-test-renderer';
import { expect, it, vi } from 'vitest';
import { LoginModel } from '../model';
import LoginView from '../view';

vi.mock('../view.model', () => {
  const fnLoginViewModel = vi.fn();
  fnLoginViewModel.mockImplementation(
    () =>
      ({
        state: {
          email: '',
          password: '',
          loading: false,
        },
        handlers: {
          setEmail: vi.fn(),
          setPassword: vi.fn(),
          submit: vi.fn(),
        },
      } as LoginModel),
  );

  return { default: fnLoginViewModel };
});

import useLoginViewModel from '../view.model';

it('should render correctly', () => {
  const { toJSON } = renderer.create(<LoginView />);
  expect(toJSON()).toMatchSnapshot();
});

it('should render correctly with email', () => {
  useLoginViewModel.mockImplementation(() => ({
    state: {
      email: 'teste@email.com.br',
      password: '',
      loading: false,
    },
    handlers: {
      setEmail: vi.fn(),
      setPassword: vi.fn(),
      submit: vi.fn(),
    },
  }));

  const { toJSON } = renderer.create(<LoginView />);
  expect(toJSON()).toMatchSnapshot();
});

it('should render correctly with password', () => {
  useLoginViewModel.mockImplementation(() => ({
    state: {
      email: '',
      password: '123',
      loading: false,
    },
    handlers: {
      setEmail: vi.fn(),
      setPassword: vi.fn(),
      submit: vi.fn(),
    },
  }));

  const { toJSON } = renderer.create(<LoginView />);
  expect(toJSON()).toMatchSnapshot();
});

it('should render correctly with password and email', () => {
  useLoginViewModel.mockImplementation(() => ({
    state: {
      email: 'teste@email.com.br',
      password: '123',
      loading: false,
    },
    handlers: {
      setEmail: vi.fn(),
      setPassword: vi.fn(),
      submit: vi.fn(),
    },
  }));

  const { toJSON } = renderer.create(<LoginView />);
  expect(toJSON()).toMatchSnapshot();
});

it('should render while loading', () => {
  useLoginViewModel.mockImplementation(() => ({
    state: {
      email: 'teste@email.com.br',
      password: '123',
      loading: true,
    },
    handlers: {
      setEmail: vi.fn(),
      setPassword: vi.fn(),
      submit: vi.fn(),
    },
  }));

  const { toJSON } = renderer.create(<LoginView />);
  expect(toJSON()).toMatchSnapshot();
});
