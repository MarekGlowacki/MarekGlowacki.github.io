
import { Paperclip } from "lucide-react";
import { EmailTemplate } from "./utils/EmailTemplates";

interface EmailPreviewProps {
  to: string;
  subject: string;
  content: string;
  replyTo?: string;
  attachments: File[];
  correspondenceHistory?: string;
  templateType: string;
}

export const EmailPreview = ({ 
  to, 
  subject, 
  content, 
  replyTo, 
  attachments,
  correspondenceHistory,
  templateType
}: EmailPreviewProps) => {
  // Split recipients by semicolon and remove any extra whitespace
  const recipients = to ? to.split(';').map(email => email.trim()).filter(email => email) : [];
  
  return (
    <div className="border border-gray-300 rounded-md p-6 bg-gray-50">
      <div className="mb-4 pb-4 border-b border-gray-200">
        <p className="text-sm text-gray-600">Od: <span className="font-medium">kontakt@marekglowacki.pl</span></p>
        
        {recipients.length > 0 ? (
          <div className="text-sm text-gray-600">
            Do: 
            {recipients.map((recipient, index) => (
              <span key={index} className="font-medium block ml-4">
                • {recipient}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">Do: <span className="font-medium">adres@email.com</span></p>
        )}
        
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
      <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
        <EmailTemplate 
          content={content} 
          templateType={templateType as any} 
          correspondenceHistory={correspondenceHistory}
        />
      </div>
    </div>
  );
};
