import useLoginViewModel from './view.model';

const LoginView = () => {
  const { state, handlers } = useLoginViewModel();
  const { email, password, loading } = state;
  const { setEmail, setPassword, submit } = handlers;
  return (
    <form onSubmit={submit}>
      {loading && <p>CARREGANDO...</p>}
      <label>Email</label>
      <input placeholder="user@email.com" onChange={(event) => setEmail(event.target.value)} value={email} />
      <label>Senha</label>
      <input
        autoComplete="on"
        placeholder="*****"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <button disabled={loading} type="submit">
        ENTRAR
      </button>
    </form>
  );
};

export default LoginView;
