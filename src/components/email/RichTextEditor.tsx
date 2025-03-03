
import { useState, useEffect } from "react";
import { EditorToolbar } from "./editor/EditorToolbar";
import { HtmlEditor } from "./editor/HtmlEditor";
import { VisualEditor } from "./editor/VisualEditor";

interface RichTextEditorProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  htmlMode?: boolean;
}

export const RichTextEditor = ({ id, value, onChange, htmlMode = false }: RichTextEditorProps) => {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  
  useEffect(() => {
    if (!htmlMode) {
      setIsEditorReady(true);
    }
  }, [htmlMode]);
  
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
    setLinkUrl('');
    setShowLinkInput(false);
  };
  
  const handleLinkCancel = () => {
    setShowLinkInput(false);
  };
  
  if (htmlMode) {
    return <HtmlEditor value={value} onChange={onChange} />;
  }
  
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
