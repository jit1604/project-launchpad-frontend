import { useState, useEffect } from 'react'
import ApplicationForm from './ApplicationForm'


function App() {

  const [application, setApplication] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/applications')
    .then(res => res.json())
    .then(data => setApplication(data))
  }, [])

  function handleAdd(newApplication) {
  setApplication([...application, newApplication])
}

function handleDelete(id) {
  fetch(`http://127.0.0.1:8000/applications/${id}`, {
    method: 'DELETE'
  })
    .then(() => setApplication(application.filter(app => app.id !== id)))
}

  return (
  <div>
    <ApplicationForm onAdd={handleAdd} />
    <h1>Project Launchpad</h1>
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Role</th>
          <th>Status</th>
          <th>Deadline</th>
          <th>Priority</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {application.map(app => (
          <tr key={app.id}>
            <td>{app.company}</td>
            <td>{app.role}</td>
            <td>{app.status}</td>
            <td>{app.deadline}</td>
            <td>{app.priority}</td>
            <td>{app.notes}</td>
            <td>
  <button onClick={() => handleDelete(app.id)}>Delete</button>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
}

export default App