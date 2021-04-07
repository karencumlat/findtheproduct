import { AuthProvider } from './authy/Auth';
import SnapshotFirebase from './SnapshotFirebase';
import AuthyForm from './authy/AuthyForm';
import Welcome from './Welcome';

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* <Welcome /> */}
        <AuthyForm />
        <SnapshotFirebase />
      </AuthProvider>
    </div>
  );
}

export default App;
