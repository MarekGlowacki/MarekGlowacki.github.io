
import React from "react";

// Email template types
export type EmailTemplateType = "default" | "professional" | "minimal";

interface EmailTemplateProps {
  content: string;
  templateType?: EmailTemplateType;
}

// Function to wrap content in a beautiful template
export const wrapContentInTemplate = (content: string, templateType: EmailTemplateType = "default"): string => {
  switch (templateType) {
    case "professional":
      return professionalTemplate(content);
    case "minimal":
      return minimalTemplate(content);
    case "default":
    default:
      return defaultTemplate(content);
  }
};

// Default template with clean design
const defaultTemplate = (content: string): string => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        ${content}
      </div>
      <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #666;">
        <p>Ten email został wysłany za pomocą kompozytora email Marka Głowackiego.</p>
      </div>
    </div>
  `;
};

// Professional template with branding
const professionalTemplate = (content: string): string => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f9fa; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 4px; padding: 30px; border-top: 4px solid #4a6cf7;">
          ${content}
        </div>
        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
          <p>Wiadomość wysłana przez Kompozytor Email Marka Głowackiego</p>
        </div>
      </div>
    </div>
  `;
};

// Minimal template
const minimalTemplate = (content: string): string => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="padding: 15px; background-color: #ffffff; border-left: 3px solid #ddd;">
        ${content}
      </div>
    </div>
  `;
};

// React component for rendering the email preview
export const EmailTemplate: React.FC<EmailTemplateProps> = ({ content, templateType = "default" }) => {
  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: wrapContentInTemplate(content, templateType) 
      }} 
    />
  );
};
