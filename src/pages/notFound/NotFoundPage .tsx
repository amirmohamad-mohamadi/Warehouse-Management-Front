import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/shared/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    if (location.key !== "default") {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        صفحه‌ای که دنبالش بودید پیدا نشد
      </h2>
      <p className="text-gray-600 mb-6">
        ممکنه آدرس اشتباه وارد شده باشه یا صفحه حذف شده باشه.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button to="/" variant="primary" size="md">
          بازگشت به صفحه اصلی
        </Button>
        <Button onClick={handleGoBack} variant="secondary" size="md">
          بازگشت به صفحه قبل
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
