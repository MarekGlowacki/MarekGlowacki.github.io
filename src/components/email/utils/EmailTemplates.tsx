
import React from "react";

// Email template types
export type EmailTemplateType = "default" | "professional" | "minimal" | "website" | "green";

interface EmailTemplateProps {
  content: string;
  templateType?: EmailTemplateType;
  correspondenceHistory?: string;
}

// Function to wrap content in a beautiful template
export const wrapContentInTemplate = (
  content: string, 
  templateType: EmailTemplateType = "default",
  correspondenceHistory?: string
): string => {
  // Font import for all templates - using Google Fonts with preconnect for better performance
  const fontImport = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap" rel="stylesheet">
  `;
  
  // Replace signature color to blue using Playfair Display font
  const signatureRegex = /(Z poważaniem,\s*<br>Marek Głowacki)<\/p>/i;
  const blueSignature = content.replace(
    signatureRegex,
    '<span style="color: #0874d4; font-family: \'Playfair Display\', serif; font-weight: 400;">$1</span></p>'
  );

  switch (templateType) {
    case "professional":
      return professionalTemplate(blueSignature, correspondenceHistory, fontImport);
    case "minimal":
      return minimalTemplate(blueSignature, correspondenceHistory, fontImport);
    case "website":
      return websiteTemplate(blueSignature, correspondenceHistory, fontImport);
    case "green":
      return greenTemplate(blueSignature, correspondenceHistory, fontImport);
    case "default":
    default:
      return defaultTemplate(blueSignature, correspondenceHistory, fontImport);
  }
};

// Function to add correspondence history if it exists
const addCorrespondenceHistory = (correspondenceHistory?: string): string => {
  if (!correspondenceHistory) return '';
  
  // Preserve line breaks and spaces by converting them to HTML elements
  const formattedHistory = correspondenceHistory
    .replace(/\n/g, '<br>')  // Convert line breaks to <br> tags
    .replace(/\s{2,}/g, match => '&nbsp;'.repeat(match.length)); // Convert multiple spaces to &nbsp;
  
  return `
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <div style="color: #666; font-size: 14px; margin-bottom: 10px;">Historia korespondencji:</div>
      <div style="color: #444; background-color: #f9f9f9; padding: 15px; border-left: 3px solid #ddd; font-size: 14px; white-space: pre-wrap;">
        ${formattedHistory}
      </div>
    </div>
  `;
};

// Default template with clean design
const defaultTemplate = (content: string, correspondenceHistory?: string, fontImport?: string): string => {
  return `
    ${fontImport || ''}
    <div style="font-family: Arial, Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        ${content}
        ${addCorrespondenceHistory(correspondenceHistory)}
      </div>
      <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #666;">
        <p>Ten email został wysłany za pomocą kompozytora email Marka Głowackiego.</p>
      </div>
    </div>
  `;
};

// Professional template with branding
const professionalTemplate = (content: string, correspondenceHistory?: string, fontImport?: string): string => {
  return `
    ${fontImport || ''}
    <div style="font-family: Arial, Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f9fa; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 4px; padding: 30px; border-top: 4px solid #4a6cf7;">
          ${content}
          ${addCorrespondenceHistory(correspondenceHistory)}
        </div>
        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
          <p>Wiadomość wysłana przez Kompozytor Email Marka Głowackiego</p>
        </div>
      </div>
    </div>
  `;
};

// Minimal template
const minimalTemplate = (content: string, correspondenceHistory?: string, fontImport?: string): string => {
  return `
    ${fontImport || ''}
    <div style="font-family: Arial, Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="padding: 15px; background-color: #ffffff; border-left: 3px solid #ddd;">
        ${content}
        ${addCorrespondenceHistory(correspondenceHistory)}
      </div>
    </div>
  `;
};

// Website-style template that matches the site's design
const websiteTemplate = (content: string, correspondenceHistory?: string, fontImport?: string): string => {
  return `
    ${fontImport || ''}
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #171717;">
      <div style="background-color: #F7F7F7; padding: 24px;">
        <div style="background-color: #ffffff; border-radius: 8px; padding: 32px; border-left: 4px solid #404040;">
          <div style="margin-bottom: 20px;">
            ${content}
          </div>
          ${addCorrespondenceHistory(correspondenceHistory)}
        </div>
        <div style="text-align: center; margin-top: 24px; padding-top: 20px; border-top: 1px solid #D4D4D4; font-size: 12px; color: #737373;">
          <p>Ten email został wysłany za pomocą kompozytora email Marka Głowackiego.</p>
        </div>
      </div>
    </div>
  `;
};

// Green template (site-style with green accents)
const greenTemplate = (content: string, correspondenceHistory?: string, fontImport?: string): string => {
  return `
    ${fontImport || ''}
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #171717;">
      <div style="background-color: #F2FCE2; padding: 24px;">
        <div style="background-color: #ffffff; border-radius: 8px; padding: 32px; border-left: 4px solid #50bc24;">
          <div style="margin-bottom: 20px;">
            ${content}
          </div>
          ${addCorrespondenceHistory(correspondenceHistory)}
        </div>
        <div style="text-align: center; margin-top: 24px; padding-top: 20px; border-top: 1px solid #E5F5DC; font-size: 12px; color: #737373;">
          <p>Ten email został wysłany za pomocą kompozytora email Marka Głowackiego.</p>
        </div>
      </div>
    </div>
  `;
};

// React component for rendering the email preview
export const EmailTemplate: React.FC<EmailTemplateProps> = ({ 
  content, 
  templateType = "default",
  correspondenceHistory 
}) => {
  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: wrapContentInTemplate(content, templateType, correspondenceHistory) 
      }} 
    />
  );
};
