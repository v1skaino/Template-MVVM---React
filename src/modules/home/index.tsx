import { Button } from '@/shared/components/button';
import { useHome } from './useHome';

const Home = () => {
  const { handlers, state } = useHome();
  const { setEmail, submit } = handlers;
  const { email } = state;

  return (
    <form onSubmit={submit}>
      <label>Email </label>
      <input onChange={(ev) => setEmail(ev.target.value)} value={email} />
      <Button label="Entrar" type="submit" />
    </form>
  );
};

export { Home };
