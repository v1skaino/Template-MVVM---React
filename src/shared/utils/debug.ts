import { environment } from '../settings/index';

const debug = {
  globalState(json: object) {
    return (
      environment == 'dev' &&
      console.log(`%cState`, 'background: #8F2D56; color: #fff;padding: 6px 10px; border-radius:10px', json)
    );
  },
  debugError: function (msg: string) {
    console.log('%c' + msg, 'color:' + 'tomato' + ';font-weight:bold;');
  },
  debugWarning: function (msg: string) {
    console.log('%c' + msg, 'color:' + 'yellow' + ';font-weight:bold;');
  },
  debugSuccess: function (msg: string) {
    console.log('%c' + msg, 'color:' + 'green' + ';font-weight:bold;');
  },
};

export { debug };
