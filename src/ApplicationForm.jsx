import { useState } from 'react'

function ApplicationForm({ onAdd }) {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: '',
    deadline: '',
    priority: '',
    notes: ''
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://job-tracker-flvq.onrender.com/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => onAdd(data))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" placeholder="Company" onChange={handleChange} />
      <input name="role" placeholder="Role" onChange={handleChange} />
      <input name="status" placeholder="Status" onChange={handleChange} />
      <input name="deadline" placeholder="Deadline" onChange={handleChange} />
      <input name="priority" placeholder="Priority" onChange={handleChange} />
      <input name="notes" placeholder="Notes" onChange={handleChange} />
      <button type="submit">Add Application</button>
    </form>
  )
}

export default ApplicationForm