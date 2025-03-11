
import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { Check } from "lucide-react";

interface RecipientFieldsProps {
  to: string;
  setTo: (value: string) => void;
  subject: string;
  setSubject: (value: string) => void;
}

export const RecipientFields = ({ to, setTo, subject, setSubject }: RecipientFieldsProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const suggestionBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Function to search for email suggestions
  const searchEmails = async (query: string) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await supabase.functions.invoke("manage-email-contacts", {
        body: { 
          action: "search", 
          data: { query } 
        }
      });
      
      if (response.error) {
        console.error("Error searching emails:", response.error);
        return;
      }
      
      if (response.data && response.data.emails) {
        const emailList = response.data.emails.map(item => item.email);
        setSuggestions(emailList);
      }
    } catch (error) {
      console.error("Error fetching email suggestions:", error);
    } finally {
      setLoading(false);
    }
  };
  
  // Effect to handle outside clicks to close the suggestion box
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  // Effect to search when query changes
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchEmails(searchQuery);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);
  
  // Parse multiple email addresses
  const parseEmails = (value: string): string[] => {
    return value.split(';').map(email => email.trim()).filter(email => email);
  };
  
  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTo(value);
    
    // Get the last email being typed (after the last semicolon)
    const emails = parseEmails(value);
    const lastEmailPart = emails.length > 0 ? emails[emails.length - 1] : value;
    
    setSearchQuery(lastEmailPart);
    setShowSuggestions(true);
  };
  
  // Handle email suggestion selection
  const handleSelectSuggestion = (email: string) => {
    // Replace only the last part of the input (after the last semicolon)
    const emails = parseEmails(to);
    emails.pop(); // Remove the last one (which is being typed)
    
    const newValue = emails.length > 0 
      ? `${emails.join('; ')}; ${email}; ` 
      : `${email}; `;
    
    setTo(newValue);
    setShowSuggestions(false);
    setSearchQuery("");
    inputRef.current?.focus();
  };
  
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
      <div className="relative">
        <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
          Do:
        </label>
        <Input
          ref={inputRef}
          id="to"
          type="text"
          value={to}
          onChange={handleEmailChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder="adres@email.com; drugi@email.com; trzeci@email.com"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+(;\s*[^\s@]+@[^\s@]+\.[^\s@]+)*$"
        />
        <p className="mt-1 text-xs text-gray-500">Możesz wpisać wiele adresów email oddzielonych średnikiem (;)</p>
        
        {/* Email Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div 
            ref={suggestionBoxRef}
            className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto"
          >
            {suggestions.map((email, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between"
                onClick={() => handleSelectSuggestion(email)}
              >
                <span>{email}</span>
                <Check size={16} className="text-green-500 opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        )}
        
        {loading && (
          <div className="absolute right-3 top-10">
            <div className="animate-spin h-5 w-5 border-2 border-green-500 rounded-full border-t-transparent"></div>
          </div>
        )}
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Temat:
        </label>
        <Input
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
