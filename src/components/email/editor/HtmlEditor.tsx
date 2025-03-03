
import { useEffect, useRef } from "react";
import { Code } from "lucide-react";

interface HtmlEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const HtmlEditor = ({ value, onChange }: HtmlEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.value = value;
    }
  }, [value]);
  
  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-300 p-2 flex items-center">
        <Code size={16} className="text-gray-500 mr-2" />
        <span className="text-sm text-gray-600">Tryb edycji HTML</span>
      </div>
      <textarea
        ref={textareaRef}
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[300px] p-4 font-mono text-sm focus:outline-none"
        placeholder="<p>Wprowadź kod HTML tutaj...</p>"
      />
    </div>
  );
};
