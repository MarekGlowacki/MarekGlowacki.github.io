
import React from "react";

interface HtmlEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const HtmlEditor = ({ value, onChange }: HtmlEditorProps) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-64 p-4 font-mono text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      placeholder="<p>Wprowadź kod HTML tutaj...</p>"
    />
  );
};
