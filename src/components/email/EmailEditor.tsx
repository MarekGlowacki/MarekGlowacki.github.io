
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmailForm } from "./EmailForm";
import { EmailPreview } from "./EmailPreview";

interface EmailEditorProps {
  onSendEmail: (data: { 
    to: string; 
    subject: string; 
    content: string;
    replyTo?: string;
    attachments?: File[];
  }) => Promise<boolean>;
  isSending: boolean;
}

export const EmailEditor = ({ onSendEmail, isSending }: EmailEditorProps) => {
  const { t } = useLanguage();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("<p>Witam,</p><p><br></p><p>Z poważaniem,</p><p>Marek Głowacki</p>");
  const [replyTo, setReplyTo] = useState("");
  const [preview, setPreview] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [htmlMode, setHtmlMode] = useState(false);
  
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
      attachments: attachments.length > 0 ? attachments : undefined
    });
    
    if (success) {
      // Clear form on success
      setTo("");
      setSubject("");
      setContent("<p>Witam,</p><p><br></p><p>Z poważaniem,</p><p>Marek Głowacki</p>");
      setReplyTo("");
      setAttachments([]);
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
            htmlMode={htmlMode}
            setHtmlMode={setHtmlMode}
            handleSubmit={handleSubmit}
            isSending={isSending}
          />
        </TabsContent>
        
        <TabsContent value="preview" className="mt-0">
          <EmailPreview
            to={to}
            subject={subject}
            content={content}
            replyTo={replyTo}
            attachments={attachments}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
