"use client";

import { TextField } from "@mui/material";
import React from "react";
import { useState, useDeferredValue, useMemo } from "react";

const HeavyFilterWithUseDeferredValuePageComponent = () => {
  const allItems = Array.from({ length: 10000 }, (_, i) => i);
  const [input, setInput] = useState("");

  const deferredInput = useDeferredValue(input);

  const filtered = useMemo(() => {
    return allItems.filter((item) =>
      item.toString().toLowerCase().includes(deferredInput.toLowerCase())
    );
  }, [deferredInput]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <div>
      <TextField
        className="w-full"
        value={input}
        onChange={onChange}
        placeholder="数字を入力してフィルタリング..."
      />
      {input !== deferredInput && <p>フィルター中...</p>}

      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(HeavyFilterWithUseDeferredValuePageComponent);
