
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface EditorToolbarButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const EditorToolbarButton = ({ onClick, children }: EditorToolbarButtonProps) => {
  return (
    <Button 
      type="button" 
      variant="ghost" 
      size="sm" 
      onClick={onClick}
      className="h-8 w-8 p-0"
    >
      {children}
    </Button>
  );
};
