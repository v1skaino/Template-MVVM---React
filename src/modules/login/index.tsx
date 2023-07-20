import { useLogin } from './useLogin';

const Login = () => {
  const { state, handlers } = useLogin();
  const { email, password, loading } = state;
  const { setEmail, setPassword, submit } = handlers;
  return (
    <form onSubmit={submit}>
      {loading && <p>CARREGANDO...</p>}
      <label>Email</label>
      <input placeholder="user@email.com" onChange={(event) => setEmail(event.target.value)} value={email} />
      <label>Senha</label>
      <input
        placeholder="*****"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <button type="submit">ENTRAR</button>
    </form>
  );
};

export { Login };
