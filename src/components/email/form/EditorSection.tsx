
import React from "react";
import { Button } from "@/components/ui/button";
import { RichTextEditor } from "../RichTextEditor";

interface EditorSectionProps {
  content: string;
  setContent: (value: string) => void;
  htmlMode: boolean;
  setHtmlMode: (value: boolean) => void;
}

export const EditorSection = ({ 
  content, 
  setContent, 
  htmlMode, 
  setHtmlMode 
}: EditorSectionProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <label htmlFor="editor" className="block text-sm font-medium text-gray-700">
          Treść:
        </label>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setHtmlMode(!htmlMode)}
          className="text-xs h-7"
        >
          {htmlMode ? "Tryb wizualny" : "Tryb HTML"}
        </Button>
      </div>
      <RichTextEditor 
        id="editor"
        value={content} 
        onChange={setContent} 
        htmlMode={htmlMode}
      />
    </div>
  );
};
