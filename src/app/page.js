"use client";
import { useState } from "react";

export default function Home() {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [result, setResult] = useState(null);

  const compareAddresses = async () => {
    const res = await fetch("/api/compare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address1, address2 }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Compare Two Addresses</h1>
      <input
        type="text"
        placeholder="Enter Address 1"
        value={address1}
        onChange={(e) => setAddress1(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="text"
        placeholder="Enter Address 2"
        value={address2}
        onChange={(e) => setAddress2(e.target.value)}
        className="border p-2 m-2"
      />
      <button onClick={compareAddresses} className="bg-blue-500 text-white p-2 mt-2">
        Compare
      </button>
      {result && (
        </p>
      )}
    </main>
  );
}
