
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RecipientFields } from "./form/RecipientFields";
import { EditorSection } from "./form/EditorSection";
import { AttachmentsSection } from "./form/AttachmentsSection";
import { AdvancedOptions } from "./form/AdvancedOptions";
import { SubmitButton } from "./form/SubmitButton";
import { EmailTemplateType } from "./utils/EmailTemplates";

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
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSending: boolean;
  templateType: EmailTemplateType;
  setTemplateType: (value: EmailTemplateType) => void;
  correspondenceHistory: string;
  setCorrespondenceHistory: (value: string) => void;
}

export const EmailForm = ({ 
  to, setTo,
  subject, setSubject,
  content, setContent,
  replyTo, setReplyTo,
  attachments, setAttachments,
  showAdvanced, setShowAdvanced,
  handleSubmit,
  isSending,
  templateType, setTemplateType,
  correspondenceHistory, setCorrespondenceHistory
}: EmailFormProps) => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const validateEmails = (emails: string) => {
    if (!emails) return false;
    
    // Split by semicolon and trim whitespace
    const emailList = emails.split(';').map(email => email.trim()).filter(email => email);
    
    if (emailList.length === 0) return false;
    
    // Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if all emails in the list are valid
    return emailList.every(email => emailPattern.test(email));
  };
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});
    
    // Validate emails
    if (!validateEmails(to)) {
      setErrors(prev => ({ ...prev, to: "Proszę podać poprawne adresy email oddzielone średnikami" }));
      toast({
        variant: "destructive",
        title: "Błąd walidacji",
        description: "Proszę podać poprawne adresy email oddzielone średnikami",
      });
      return;
    }
    
    // Proceed with form submission
    handleSubmit(e);
  };
  
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
    <form onSubmit={onSubmit} className="space-y-6">
      <RecipientFields
        to={to}
        setTo={setTo}
        subject={subject}
        setSubject={setSubject}
      />
      {errors.to && (
        <p className="text-red-500 text-sm mt-1">{errors.to}</p>
      )}
      
      <div className="mb-4">
        <label htmlFor="template" className="block text-sm font-medium text-gray-700 mb-1">
          Szablon wiadomości:
        </label>
        <Select value={templateType} onValueChange={(value) => setTemplateType(value as EmailTemplateType)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Wybierz szablon" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Standardowy</SelectItem>
            <SelectItem value="professional">Profesjonalny</SelectItem>
            <SelectItem value="minimal">Minimalistyczny</SelectItem>
            <SelectItem value="website">Dopasowany do strony</SelectItem>
            <SelectItem value="green">Zielony</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <EditorSection
        content={content}
        setContent={setContent}
        correspondenceHistory={correspondenceHistory}
        setCorrespondenceHistory={setCorrespondenceHistory}
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
