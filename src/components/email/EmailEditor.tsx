
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RichTextEditor } from "./RichTextEditor";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, Paperclip } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();
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

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const totalSize = [...attachments, ...newFiles].reduce((acc, file) => acc + file.size, 0);
      
      // Limit total attachment size to 10MB (10 * 1024 * 1024 bytes)
      if (totalSize > 10 * 1024 * 1024) {
        toast({
          variant: "destructive",
          title: "Zbyt duże załączniki",
          description: "Całkowity rozmiar załączników nie może przekraczać 10MB.",
        });
        return;
      }
      
      setAttachments(prev => [...prev, ...newFiles]);
    }
    // Clear the input value to allow selecting the same file again
    e.target.value = '';
  };
  
  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
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
              
              {attachments.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600">Załączniki:</p>
                  <div className="ml-2 mt-1">
                    {attachments.map((file, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Paperclip className="h-3 w-3 mr-1" />
                        <span>{file.name} ({(file.size / 1024).toFixed(0)} KB)</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div 
              className="prose prose-sm max-w-none border border-gray-200 p-4 rounded-md bg-white" 
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

