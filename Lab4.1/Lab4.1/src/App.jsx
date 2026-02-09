import './App.css'
const TaskItem = (props) => {
  return (
    <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
      <p>Name: {props.info.name}</p>
      <p>Priority: {props.info.priority}</p>
    </div>
  );
};
function App() {
  const taskData = { id: 101, name: "Buy Milk", priority: "High" };

  return <TaskItem info={taskData} />;
}
export default App;
