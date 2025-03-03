
import React from "react";

interface RecipientFieldsProps {
  to: string;
  setTo: (value: string) => void;
  subject: string;
  setSubject: (value: string) => void;
}

export const RecipientFields = ({ to, setTo, subject, setSubject }: RecipientFieldsProps) => {
  // Custom validation function for multiple email addresses
  const validateEmails = (emails: string) => {
    if (!emails) return false;
    
    // Split by semicolon and trim whitespace
    const emailList = emails.split(';').map(email => email.trim()).filter(email => email);
    
    // Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if all emails in the list are valid
    return emailList.every(email => emailPattern.test(email));
  };
  
  return (
    <>
      <div>
        <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
          Do:
        </label>
        <input
          id="to"
          type="text" // Changed from type="email" to type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="adres@email.com; drugi@email.com; trzeci@email.com"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+(;\s*[^\s@]+@[^\s@]+\.[^\s@]+)*$" // Pattern to validate multiple email addresses
        />
        <p className="mt-1 text-xs text-gray-500">Możesz wpisać wiele adresów email oddzielonych średnikiem (;)</p>
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
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>
    </>
  );
};
