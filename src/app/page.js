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

  };

   
        onChange={(e) => setAddress2(e.target.value)}
        className="border p-2 m-2"
      />
    
}
