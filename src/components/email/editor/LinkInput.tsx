
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LinkInputProps {
  onInsert: (url: string) => void;
  onCancel: () => void;
  initialUrl?: string;
}

export const LinkInput = ({ onInsert, onCancel, initialUrl = '' }: LinkInputProps) => {
  const [url, setUrl] = useState(initialUrl);
  
  const handleInsert = () => {
    if (url) {
      onInsert(url);
    }
  };
  
  return (
    <div className="bg-gray-50 border-b border-gray-300 p-2 flex items-center gap-2">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="flex-1 p-1 text-sm border border-gray-300 rounded"
      />
      <Button 
        type="button" 
        variant="outline" 
        size="sm" 
        onClick={handleInsert}
        className="h-7 text-xs"
      >
        Wstaw
      </Button>
      <Button 
        type="button" 
        variant="ghost" 
        size="sm" 
        onClick={onCancel}
        className="h-7 text-xs"
      >
        Anuluj
      </Button>
    </div>
  );
};
