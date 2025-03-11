
import React from "react";
import { RichTextEditor } from "../RichTextEditor";
import { Textarea } from "@/components/ui/textarea";

interface EditorSectionProps {
  content: string;
  setContent: (value: string) => void;
  correspondenceHistory?: string;
  setCorrespondenceHistory?: (value: string) => void;
}

export const EditorSection = ({ 
  content, 
  setContent,
  correspondenceHistory = "",
  setCorrespondenceHistory
}: EditorSectionProps) => {
  return (
    <div className="space-y-4">
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
      
      {setCorrespondenceHistory && (
        <div>
          <div className="mb-1">
            <label htmlFor="correspondence-history" className="block text-sm font-medium text-gray-700">
              Historia korespondencji:
            </label>
            <p className="text-xs text-gray-500">
              Wklej tutaj wcześniejszą korespondencję, która zostanie dołączona pod Twoją wiadomością
            </p>
          </div>
          <Textarea
            id="correspondence-history"
            value={correspondenceHistory}
            onChange={(e) => setCorrespondenceHistory(e.target.value)}
            placeholder="Wklej tutaj wcześniejszą korespondencję..."
            className="min-h-[150px]"
          />
        </div>
      )}
    </div>
  );
};
