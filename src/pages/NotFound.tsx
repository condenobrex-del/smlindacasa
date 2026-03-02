import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">BAHHHH</h1>
        <p className="mb-4 text-xl text-slate-700 dark:text-muted-foreground">CALMA!🖐 O RAFAEL TÁ MEXENDO AINDA 😅</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Clique aqui e retorne ao aplicativo enquanto ele fuça lá.
        </a>
      </div>
    </div>
  );
};

export default NotFound;
