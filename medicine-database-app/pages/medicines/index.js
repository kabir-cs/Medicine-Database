import { useState, useEffect } from 'react';

export default function Medicines() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch('/api/medicines')
      .then(res => res.json())
      .then(data => setMedicines(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Medicine List</h1>
      <ul>
        {medicines.map(med => (
          <li key={med._id} className="border p-2 my-2">{med.name} - {med.description}</li>
        ))}
      </ul>
    </div>
  );
}