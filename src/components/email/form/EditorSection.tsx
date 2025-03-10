
import React from "react";
import { RichTextEditor } from "../RichTextEditor";

interface EditorSectionProps {
  content: string;
  setContent: (value: string) => void;
}

export const EditorSection = ({ 
  content, 
  setContent
}: EditorSectionProps) => {
  return (
    <div>
      <div className="mb-1">
        <label htmlFor="editor" className="block text-sm font-medium text-gray-700">
          Treść:
        </label>
      </div>
      <RichTextEditor 
        id="editor"
        value={content} 
        onChange={setContent} 
      />
    </div>
  );
};
