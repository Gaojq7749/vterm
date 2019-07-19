import React from 'react';
import {HashRouter} from 'react-router-dom'
import RouterView from "./router/RouterView";
import routes from "./router/RouterConfig";
import 'antd/dist/antd.css';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
          <RouterView routes={routes}/>
      </div>
    </HashRouter>   
  );
}

export default App;
