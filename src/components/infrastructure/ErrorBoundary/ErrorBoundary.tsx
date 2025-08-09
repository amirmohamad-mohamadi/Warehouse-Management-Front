import { Component, type ReactNode } from "react";
import { Button } from "../../shared/Button";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("خطا در کامپوننت:", error, errorInfo);
    // می‌تونی اینجا لاگ بفرستی به سرور
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              مشکلی پیش آمده 😢
            </h1>
            <p className="text-gray-700 mb-6">
              متأسفیم، مشکلی در بارگذاری این بخش رخ داده. لطفاً یکی از گزینه‌های
              زیر را امتحان کنید.
            </p>
            <div className="flex gap-4">
              <Button to="/" variant="primary">
                بازگشت به صفحه اصلی
              </Button>
              <Button to="/login" variant="secondary">
                ورود مجدد
              </Button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
