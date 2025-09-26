import { useRouteError } from "react-router-dom";
import { Home } from "lucide-react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-center text-center max-w-md">
        <Home className="w-16 h-16 text-primary mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold text-foreground mb-2">Oops !</h1>
        <p className="text-muted-foreground mb-4">
          {error?.statusText || error?.message || "La page que vous cherchez n’existe pas."}
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-primary text-white rounded-xl shadow hover:opacity-90 transition"
        >
          Retour à l’accueil
        </a>
      </div>
    </div>
  );
}
