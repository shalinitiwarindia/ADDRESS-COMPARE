"use client";
import { useState } from "react";

export default function Home() {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [result, setResult] = useState(null);

  
