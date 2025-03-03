
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, 
  AlignRight, AlignJustify, Link as LinkIcon, 
  List, ListOrdered, Undo, Redo 
} from "lucide-react";
import { EditorToolbarButton } from "./EditorToolbarButton";

interface EditorToolbarProps {
  execCommand: (command: string, value?: string) => void;
  onLinkClick: () => void;
}

export const EditorToolbar = ({ execCommand, onLinkClick }: EditorToolbarProps) => {
  return (
    <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
      <EditorToolbarButton onClick={() => execCommand('bold')}>
        <Bold size={16} />
      </EditorToolbarButton>
      <EditorToolbarButton onClick={() => execCommand('italic')}>
        <Italic size={16} />
      </EditorToolbarButton>
      <EditorToolbarButton onClick={() => execCommand('underline')}>
        <Underline size={16} />
      </EditorToolbarButton>
      
      <span className="w-px h-6 bg-gray-300 mx-1 self-center"></span>
      
      <EditorToolbarButton onClick={() => execCommand('justifyLeft')}>
        <AlignLeft size={16} />
      </EditorToolbarButton>
      <EditorToolbarButton onClick={() => execCommand('justifyCenter')}>
        <AlignCenter size={16} />
      </EditorToolbarButton>
      <EditorToolbarButton onClick={() => execCommand('justifyRight')}>
        <AlignRight size={16} />
      </EditorToolbarButton>
      <EditorToolbarButton onClick={() => execCommand('justifyFull')}>
        <AlignJustify size={16} />
      </EditorToolbarButton>
      
      <span className="w-px h-6 bg-gray-300 mx-1 self-center"></span>
      
      <EditorToolbarButton onClick={onLinkClick}>
        <LinkIcon size={16} />
      </EditorToolbarButton>
      <EditorToolbarButton onClick={() => execCommand('insertUnorderedList')}>
        <List size={16} />
      </EditorToolbarButton>
      <EditorToolbarButton onClick={() => execCommand('insertOrderedList')}>
        <ListOrdered size={16} />
      </EditorToolbarButton>
      
      <span className="w-px h-6 bg-gray-300 mx-1 self-center"></span>
      
      <EditorToolbarButton onClick={() => execCommand('undo')}>
        <Undo size={16} />
      </EditorToolbarButton>
      <EditorToolbarButton onClick={() => execCommand('redo')}>
        <Redo size={16} />
      </EditorToolbarButton>
    </div>
  );
};
