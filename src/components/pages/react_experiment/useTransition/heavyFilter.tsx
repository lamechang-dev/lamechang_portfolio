"use client";

import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const HeavyFilterPageComponent = () => {
  const allItems = Array.from({ length: 10000 }, (_, i) => i);
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState(allItems);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    const filtered = allItems.filter((item) =>
      item.toString().toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(filtered);
  };

  return (
    <div>
      <TextField
        className="w-full"
        value={input}
        onChange={onChange}
        placeholder="数字を入力してフィルタリング..."
      />
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(HeavyFilterPageComponent);
