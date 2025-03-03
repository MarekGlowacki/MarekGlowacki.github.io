
import React from "react";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSending: boolean;
}

export const SubmitButton = ({ isSending }: SubmitButtonProps) => {
  return (
    <div className="flex justify-end">
      <Button 
        type="submit" 
        className="bg-[#49be25] text-white hover:bg-[#3da51e]"
        disabled={isSending}
        aria-disabled={isSending}
      >
        {isSending ? (
          <span className="flex items-center gap-2">
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            Wysyłanie...
          </span>
        ) : "Wyślij email"}
      </Button>
    </div>
  );
};
