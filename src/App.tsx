import { Game, Header } from "./containers";

const App = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen min-w-screen">
      <Header />
      <Game />
    </div>
  );
};

export default App;
