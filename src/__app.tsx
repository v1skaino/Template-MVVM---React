import { GlobalProvider } from './shared/context/global';
import Router from './shared/routes';
import GlobalStyle from './shared/styles/global_style';
function Boiderplate_APP() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <Router />
    </GlobalProvider>
  );
}

export default Boiderplate_APP;
