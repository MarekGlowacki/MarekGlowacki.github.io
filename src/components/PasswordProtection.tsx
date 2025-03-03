
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

interface PasswordProtectionProps {
  correctPassword: string;
  onSuccess: () => void;
}

export const PasswordProtection = ({ correctPassword, onSuccess }: PasswordProtectionProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      onSuccess();
      toast({
        title: "Dostęp przyznany",
        description: "Hasło prawidłowe. Witaj w kompozytorze email.",
      });
    } else {
      setError(true);
      toast({
        variant: "destructive",
        title: "Błędne hasło",
        description: "Podane hasło jest nieprawidłowe. Spróbuj ponownie.",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-lg shadow-lg border border-gray-200 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Dostęp chroniony hasłem</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Hasło
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(false);
            }}
            className={`w-full ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Wprowadź hasło dostępu"
            required
          />
          {error && (
            <p className="mt-1 text-sm text-red-500">Nieprawidłowe hasło. Spróbuj ponownie.</p>
          )}
        </div>
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
          Zaloguj się
        </Button>
      </form>
    </div>
  );
};
