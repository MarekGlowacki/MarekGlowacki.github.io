
import { Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mb-4">
      <a href="https://facebook.com/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors transform hover:scale-110">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="https://twitter.com/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors transform hover:scale-110">
        <Twitter className="w-6 h-6" />
      </a>
      <a href="https://youtube.com/@marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors transform hover:scale-110">
        <Youtube className="w-6 h-6" />
      </a>
      <a href="https://linkedin.com/in/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors transform hover:scale-110">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href="https://github.com/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors transform hover:scale-110">
        <Github className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
