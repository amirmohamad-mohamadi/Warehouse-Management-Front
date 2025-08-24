import { SignupForm } from "../../components/hybrid/Signup/SignupForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          ساخت حساب کاربری
        </h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
