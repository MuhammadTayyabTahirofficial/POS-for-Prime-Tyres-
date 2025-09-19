import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState(null);

useEffect(() => {
  fetch("/api/products")
    .then(r => r.json())
    .then(setStatus)
    .catch(e => setStatus({ error: String(e) }));
}, []);


  return (
    <div className="min-h-screen grid place-items-center">
      <div className="p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">POS Frontend ✅</h1>
        <pre className="mt-3">{JSON.stringify(status, null, 2)}</pre>
      </div>
    </div>
  );
}
