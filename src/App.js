import "./App.css";
import TodoList from "./components/TodoList";
import ParticleBackground from "./particleBackground";

function App() {
  return (
    <>
      <div className="mobile-users">
        <h2 style={{ color: "red" }}>
          Please visit this site on a desktop OR turn on "Desktop Mode" in your
          browser and then refresh!
        </h2>
      </div>
      <div className="desktop-users">
        <ParticleBackground />
        <TodoList />
      </div>
    </>
  );
}

export default App;
