
import { useState, useEffect } from "react";
import { EditorToolbar } from "./editor/EditorToolbar";
import { VisualEditor } from "./editor/VisualEditor";

interface RichTextEditorProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
}

export const RichTextEditor = ({ id, value, onChange }: RichTextEditorProps) => {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  
  useEffect(() => {
    setIsEditorReady(true);
  }, []);
  
  const execCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.focus();
    }
  };
  
  const handleLinkClick = () => {
    setShowLinkInput(!showLinkInput);
  };
  
  const handleLinkInsert = (url: string) => {
    execCommand('createLink', url);
    setShowLinkInput(false);
  };
  
  const handleLinkCancel = () => {
    setShowLinkInput(false);
  };
  
  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <EditorToolbar execCommand={execCommand} onLinkClick={handleLinkClick} />
      
      <VisualEditor 
        id={id}
        value={value}
        onChange={onChange}
        execCommand={execCommand}
        showLinkInput={showLinkInput}
        onLinkInsert={handleLinkInsert}
        onLinkCancel={handleLinkCancel}
      />
    </div>
  );
};
