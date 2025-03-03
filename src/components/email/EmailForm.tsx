
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Paperclip, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { RichTextEditor } from "./RichTextEditor";

interface EmailFormProps {
  to: string;
  setTo: (value: string) => void;
  subject: string;
  setSubject: (value: string) => void;
  content: string;
  setContent: (value: string) => void;
  replyTo: string;
  setReplyTo: (value: string) => void;
  attachments: File[];
  setAttachments: (files: File[]) => void;
  showAdvanced: boolean;
  setShowAdvanced: (value: boolean) => void;
  htmlMode: boolean;
  setHtmlMode: (value: boolean) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSending: boolean;
}

export const EmailForm = ({ 
  to, setTo,
  subject, setSubject,
  content, setContent,
  replyTo, setReplyTo,
  attachments, setAttachments,
  showAdvanced, setShowAdvanced,
  htmlMode, setHtmlMode,
  handleSubmit,
  isSending
}: EmailFormProps) => {
  const { toast } = useToast();
  
  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const totalSize = [...attachments, ...newFiles].reduce((acc, file) => acc + file.size, 0);
      
      // Limit total attachment size to 10MB
      if (totalSize > 10 * 1024 * 1024) {
        toast({
          variant: "destructive",
          title: "Zbyt duże załączniki",
          description: "Całkowity rozmiar załączników nie może przekraczać 10MB.",
        });
        return;
      }
      
      setAttachments([...attachments, ...newFiles]);
    }
    // Clear the input value to allow selecting the same file again
    e.target.value = '';
  };
  
  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
          Do:
        </label>
        <input
          id="to"
          type="email"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="adres@email.com"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Temat:
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Temat wiadomości"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
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

      <AttachmentsSection 
        attachments={attachments} 
        handleAttachmentChange={handleAttachmentChange} 
        removeAttachment={removeAttachment} 
      />
      
      <AdvancedOptions 
        showAdvanced={showAdvanced} 
        setShowAdvanced={setShowAdvanced} 
        replyTo={replyTo} 
        setReplyTo={setReplyTo} 
      />
      
      <div className="flex justify-end">
        <Button 
          type="submit" 
          className="bg-[#49be25] text-white hover:bg-[#3da51e]"
          disabled={isSending}
        >
          {isSending ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
              Wysyłanie...
            </span>
          ) : "Wyślij email"}
        </Button>
      </div>
    </form>
  );
};

interface AttachmentsSectionProps {
  attachments: File[];
  handleAttachmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeAttachment: (index: number) => void;
}

const AttachmentsSection = ({ 
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

interface AdvancedOptionsProps {
  showAdvanced: boolean;
  setShowAdvanced: (value: boolean) => void;
  replyTo: string;
  setReplyTo: (value: string) => void;
}

const AdvancedOptions = ({ 
  showAdvanced, 
  setShowAdvanced, 
  replyTo, 
  setReplyTo 
}: AdvancedOptionsProps) => {
  return (
    <div>
      <Button
        type="button"
        variant="ghost"
        className="text-sm text-gray-600"
        onClick={() => setShowAdvanced(!showAdvanced)}
      >
        {showAdvanced ? "Ukryj opcje zaawansowane" : "Pokaż opcje zaawansowane"}
      </Button>
      
      {showAdvanced && (
        <div className="mt-3 p-4 border border-gray-200 rounded-md bg-gray-50">
          <div>
            <label htmlFor="replyTo" className="block text-sm font-medium text-gray-700 mb-1">
              Adres zwrotny (opcjonalnie):
            </label>
            <input
              id="replyTo"
              type="email"
              value={replyTo}
              onChange={(e) => setReplyTo(e.target.value)}
              placeholder="twoj@email.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Jeśli chcesz, aby odpowiedzi przychodziły na inny adres niż kontakt@marekglowacki.pl
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
