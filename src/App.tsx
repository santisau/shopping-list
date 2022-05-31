import "./App.css";
import ThemeProvider from "./providers/ThemeProvider";
import List from "./components/molecules/List";
import { IListEntry } from "./components/molecules/ListEntry/ListEntry";

const base_items = [
  {
    item: "patata",
    category: "verdura",
  },
  {
    item: "judia",
    category: "verdura",
  },
  {
    item: "pera",
    category: "fruta",
  },
] as IListEntry[];

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <List defaultItems={base_items} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
