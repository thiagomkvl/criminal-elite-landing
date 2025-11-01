import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-black text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">Oops! Página não encontrada</p>
        <a href="/" className="inline-block text-primary hover:text-primary-glow font-bold underline underline-offset-4 transition-colors">
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
