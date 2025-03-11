
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmailForm } from "./EmailForm";
import { EmailPreview } from "./EmailPreview";
import { EmailTemplateType } from "./utils/EmailTemplates";
import { supabase } from "@/integrations/supabase/client";

interface EmailEditorProps {
  onSendEmail: (data: { 
    to: string; 
    subject: string; 
    content: string;
    replyTo?: string;
    attachments?: File[];
    correspondenceHistory?: string;
  }) => Promise<boolean>;
  isSending: boolean;
}

export const EmailEditor = ({ onSendEmail, isSending }: EmailEditorProps) => {
  const { t } = useLanguage();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("<p>Szanowni Państwo,</p><p><br></p><p style=\"margin: 10px 0; font-style: italic; color: #404040; font-family: 'Inter', sans-serif;\">Z poważaniem,<br>Marek Głowacki</p>");
  const [replyTo, setReplyTo] = useState("");
  const [preview, setPreview] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [templateType, setTemplateType] = useState<EmailTemplateType>("website");
  const [correspondenceHistory, setCorrespondenceHistory] = useState("");
  
  const saveEmailContacts = async (emailString: string) => {
    if (!emailString) return;
    
    // Parse emails (split by semicolon and remove spaces)
    const emails = emailString.split(';')
      .map(email => email.trim())
      .filter(email => email && email.includes('@'));
    
    if (emails.length === 0) return;
    
    try {
      console.log("Saving email contacts:", emails);
      
      await supabase.functions.invoke("manage-email-contacts", {
        body: { 
          action: "save", 
          data: { emails } 
        }
      });
      
      console.log("Email contacts saved successfully");
    } catch (error) {
      console.error("Error saving email contacts:", error);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!to || !subject || !content) {
      return;
    }
    
    const success = await onSendEmail({
      to,
      subject,
      content,
      replyTo: replyTo || undefined,
      attachments: attachments.length > 0 ? attachments : undefined,
      correspondenceHistory: correspondenceHistory || undefined
    });
    
    if (success) {
      // Save email contacts
      await saveEmailContacts(to);
      
      // Clear form on success
      setTo("");
      setSubject("");
      setContent("<p>Szanowni Państwo,</p><p><br></p><p style=\"margin: 10px 0; font-style: italic; color: #404040; font-family: 'Inter', sans-serif;\">Z poważaniem,<br>Marek Głowacki</p>");
      setReplyTo("");
      setAttachments([]);
      setCorrespondenceHistory("");
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <Tabs defaultValue="compose" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="compose" onClick={() => setPreview(false)}>Kompozycja</TabsTrigger>
          <TabsTrigger value="preview" onClick={() => setPreview(true)}>Podgląd</TabsTrigger>
        </TabsList>
        
        <TabsContent value="compose" className="mt-0">
          <EmailForm
            to={to}
            setTo={setTo}
            subject={subject}
            setSubject={setSubject}
            content={content}
            setContent={setContent}
            replyTo={replyTo}
            setReplyTo={setReplyTo}
            attachments={attachments}
            setAttachments={setAttachments}
            showAdvanced={showAdvanced}
            setShowAdvanced={setShowAdvanced}
            handleSubmit={handleSubmit}
            isSending={isSending}
            templateType={templateType}
            setTemplateType={setTemplateType}
            correspondenceHistory={correspondenceHistory}
            setCorrespondenceHistory={setCorrespondenceHistory}
          />
        </TabsContent>
        
        <TabsContent value="preview" className="mt-0">
          <EmailPreview
            to={to}
            subject={subject}
            content={content}
            replyTo={replyTo}
            attachments={attachments}
            correspondenceHistory={correspondenceHistory}
            templateType={templateType}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
