/**
 * @author [Bhavani]
 * @email [nblBhavani1995@mail.com]
 * @create date 2024-04-17 11:57:49
 * @modify date 2024-04-17 11:57:49
 * @desc [Bhav GPT App.js file]
 */
import {Provider} from 'react-redux';
import Body from './components/Body';

import './App.css';
import appStore from './utils/appStore';

function App() {
  return (
  <Provider store={appStore}>
    <Body />
    </Provider>
  );
}

export default App;
