import Task from './Task/Task.jsx';

function App() {
  const tasks = [
    { id: 1, title: 'Review JSX ', done: true },
    { id: 2, title: 'Review  Components', done: true },
    { id: 3, title: 'Review  Props', done: true },
    { id: 4, title: ' Understanding useState ', done: false },
    { id: 5, title: 'Review  State Handling', done: false },

  ];

  return (
    <div>
      <h1> Task List </h1>
      {tasks.map(task => (
        <Task key={task.id} title={task.title} done={task.done} />  
        // بالجزئية  هون بكون طبقت ال  Component بطبقت ال Props وال 
      ))}
    </div>
  );
}

export default App;
