
import { useEffect, useRef } from "react";
import { LinkInput } from "./LinkInput";

interface VisualEditorProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  execCommand: (command: string, value?: string) => void;
  showLinkInput: boolean;
  onLinkInsert: (url: string) => void;
  onLinkCancel: () => void;
}

export const VisualEditor = ({ 
  id, 
  value, 
  onChange, 
  execCommand, 
  showLinkInput, 
  onLinkInsert, 
  onLinkCancel 
}: VisualEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);
  
  const handleEditorChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };
  
  return (
    <>
      {showLinkInput && (
        <LinkInput onInsert={onLinkInsert} onCancel={onLinkCancel} />
      )}
      
      <div
        id={id}
        ref={editorRef}
        contentEditable
        className="min-h-[200px] p-4 focus:outline-none"
        onInput={handleEditorChange}
        onBlur={handleEditorChange}
      />
    </>
  );
};
