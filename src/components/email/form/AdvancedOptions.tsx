
import React from "react";
import { Button } from "@/components/ui/button";

interface AdvancedOptionsProps {
  showAdvanced: boolean;
  setShowAdvanced: (value: boolean) => void;
  replyTo: string;
  setReplyTo: (value: string) => void;
}

export const AdvancedOptions = ({ 
  showAdvanced, 
  setShowAdvanced, 
  replyTo, 
  setReplyTo 
}: AdvancedOptionsProps) => {
  return (
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
  );
};
