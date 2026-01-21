import { useEffect } from "react";
import { useNavigate } from "react-router";
import { storeUserData } from "~/appwrite/auth";

const OAuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const finishLogin = async () => {
      try {
        await storeUserData();
        navigate("/dashboard");
      } catch {
        navigate("/sign-in");
      }
    };

    finishLogin();
  }, [navigate]);

  return (
    <main className="wrapper">
      <p className="text-lg">Signing you in…</p>
    </main>
  );
};

export default OAuthSuccess;
