
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { RecipientFields } from "./form/RecipientFields";
import { EditorSection } from "./form/EditorSection";
import { AttachmentsSection } from "./form/AttachmentsSection";
import { AdvancedOptions } from "./form/AdvancedOptions";
import { SubmitButton } from "./form/SubmitButton";

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
      <RecipientFields
        to={to}
        setTo={setTo}
        subject={subject}
        setSubject={setSubject}
      />
      
      <EditorSection
        content={content}
        setContent={setContent}
        htmlMode={htmlMode}
        setHtmlMode={setHtmlMode}
      />

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
      
      <SubmitButton isSending={isSending} />
    </form>
  );
};
