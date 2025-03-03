
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RichTextEditor } from "./RichTextEditor";
import { useLanguage } from "@/contexts/LanguageContext";

interface EmailEditorProps {
  onSendEmail: (data: { 
    to: string; 
    subject: string; 
    content: string;
    replyTo?: string;
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!to || !subject || !content) {
      return;
    }
    
    const success = await onSendEmail({
      to,
      subject,
      content,
      replyTo: replyTo || undefined
    });
    
    if (success) {
      // Clear form on success
      setTo("");
      setSubject("");
      setContent("<p>Witam,</p><p><br></p><p>Z poważaniem,</p><p>Marek Głowacki</p>");
      setReplyTo("");
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
              <label htmlFor="editor" className="block text-sm font-medium text-gray-700 mb-1">
                Treść:
              </label>
              <RichTextEditor 
                id="editor"
                value={content} 
                onChange={setContent} 
              />
            </div>
            
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
        </TabsContent>
        
        <TabsContent value="preview" className="mt-0">
          <div className="border border-gray-300 rounded-md p-6 bg-gray-50">
            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-sm text-gray-600">Od: <span className="font-medium">kontakt@marekglowacki.pl</span></p>
              <p className="text-sm text-gray-600">Do: <span className="font-medium">{to || "adres@email.com"}</span></p>
              {replyTo && <p className="text-sm text-gray-600">Odpowiedź do: <span className="font-medium">{replyTo}</span></p>}
              <p className="text-sm text-gray-600">Temat: <span className="font-medium">{subject || "Temat wiadomości"}</span></p>
            </div>
            <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
