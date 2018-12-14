import React, { Component } from 'react'; 
import { Provider } from 'react-redux'
import store from './store'

import TabBar from './sections/navigation'


class App extends Component {
  render() {
    return (
      <Provider store= {store}>
        <TabBar />
      </Provider>
     );
  }
}
 export default App;