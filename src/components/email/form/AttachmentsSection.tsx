
import React from "react";
import { Button } from "@/components/ui/button";
import { Paperclip, X } from "lucide-react";

interface AttachmentsSectionProps {
  attachments: File[];
  handleAttachmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeAttachment: (index: number) => void;
}

export const AttachmentsSection = ({ 
  attachments, 
  handleAttachmentChange, 
  removeAttachment 
}: AttachmentsSectionProps) => {
  return (
    <div>
      <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-1">
        Załączniki:
      </label>
      <div className="mt-1 flex items-center gap-2">
        <label className="cursor-pointer">
          <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Paperclip className="h-4 w-4 mr-2" />
            Dodaj załącznik
          </span>
          <input
            type="file"
            id="attachments"
            onChange={handleAttachmentChange}
            className="sr-only"
            multiple
          />
        </label>
        <span className="text-xs text-gray-500">
          Maks. łączny rozmiar 10MB
        </span>
      </div>

      {attachments.length > 0 && (
        <div className="mt-3 space-y-2">
          {attachments.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
              <div className="flex items-center">
                <Paperclip className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-sm truncate max-w-[250px]">{file.name}</span>
                <span className="text-xs text-gray-500 ml-2">
                  {(file.size / 1024).toFixed(0)} KB
                </span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeAttachment(index)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
