
import React from "react";

interface RecipientFieldsProps {
  to: string;
  setTo: (value: string) => void;
  subject: string;
  setSubject: (value: string) => void;
}

export const RecipientFields = ({ to, setTo, subject, setSubject }: RecipientFieldsProps) => {
  return (
    <>
      <div>
        <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
          Do:
        </label>
        <input
          id="to"
          type="email"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="adres@email.com; drugi@email.com; trzeci@email.com"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
          multiple
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
