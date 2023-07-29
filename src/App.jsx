import Split from 'react-split';
import Form from './components/Form';
import Viewer from './components/Viewer';
import './App.css';

function App() {
  return (
    <main className="app-wrapper">
      <Split
        sizes={[60, 40]}
        minSize={100}
        expandToMin={false}
        gutterSize={8}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <Form></Form>
        <Viewer></Viewer>
      </Split>
    </main>
  );
}

export default App;
