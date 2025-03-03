
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, 
  AlignRight, AlignJustify, Link as LinkIcon, 
  List, ListOrdered, Undo, Redo 
} from "lucide-react";

interface RichTextEditorProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
}

export const RichTextEditor = ({ id, value, onChange }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value;
      setIsEditorReady(true);
    }
  }, []);
  
  const handleEditorChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };
  
  const execCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    handleEditorChange();
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };
  
  const handleInsertLink = () => {
    if (linkUrl) {
      execCommand('createLink', linkUrl);
      setLinkUrl('');
      setShowLinkInput(false);
    }
  };
  
  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('bold')}
          className="h-8 w-8 p-0"
        >
          <Bold size={16} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('italic')}
          className="h-8 w-8 p-0"
        >
          <Italic size={16} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('underline')}
          className="h-8 w-8 p-0"
        >
          <Underline size={16} />
        </Button>
        <span className="w-px h-6 bg-gray-300 mx-1 self-center"></span>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('justifyLeft')}
          className="h-8 w-8 p-0"
        >
          <AlignLeft size={16} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('justifyCenter')}
          className="h-8 w-8 p-0"
        >
          <AlignCenter size={16} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('justifyRight')}
          className="h-8 w-8 p-0"
        >
          <AlignRight size={16} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('justifyFull')}
          className="h-8 w-8 p-0"
        >
          <AlignJustify size={16} />
        </Button>
        <span className="w-px h-6 bg-gray-300 mx-1 self-center"></span>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowLinkInput(!showLinkInput)}
          className="h-8 w-8 p-0"
        >
          <LinkIcon size={16} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('insertUnorderedList')}
          className="h-8 w-8 p-0"
        >
          <List size={16} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('insertOrderedList')}
          className="h-8 w-8 p-0"
        >
          <ListOrdered size={16} />
        </Button>
        <span className="w-px h-6 bg-gray-300 mx-1 self-center"></span>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('undo')}
          className="h-8 w-8 p-0"
        >
          <Undo size={16} />
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('redo')}
          className="h-8 w-8 p-0"
        >
          <Redo size={16} />
        </Button>
      </div>
      
      {showLinkInput && (
        <div className="bg-gray-50 border-b border-gray-300 p-2 flex items-center gap-2">
          <input
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-1 p-1 text-sm border border-gray-300 rounded"
          />
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={handleInsertLink}
            className="h-7 text-xs"
          >
            Wstaw
          </Button>
          <Button 
            type="button" 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowLinkInput(false)}
            className="h-7 text-xs"
          >
            Anuluj
          </Button>
        </div>
      )}
      
      <div
        id={id}
        ref={editorRef}
        contentEditable
        className="min-h-[200px] p-4 focus:outline-none"
        onInput={handleEditorChange}
        onBlur={handleEditorChange}
      />
    </div>
  );
};
