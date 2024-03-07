import Layout from "./layout/layout";
import Board from "./components/Board";
import ContextProvider from "./context/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <div>
        <Layout>
          <Board />
        </Layout>
      </div>
    </ContextProvider>
  );
}

export default App;
