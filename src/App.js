import { AuthProvider } from './authy/Auth';

import View from './View';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <View />
      </AuthProvider>
    </div>
  );
}

export default App;
