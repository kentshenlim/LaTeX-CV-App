import Split from 'react-split';
import './App.css';

function App() {
  return (
    <main className="app-wrapper">
      <Split
        sizes={[25, 75]}
        minSize={100}
        expandToMin={false}
        gutterSize={8}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <div>Hello</div>
        <div>Fuck</div>
      </Split>
    </main>
  );
}

export default App;
