import {
  Search,
  Bell,
  Menu,
  User,
  LogOut,
  ChevronDown,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "../Button";
import { MainLink } from "../MainLink";
import InputField from "../../hybrid/Input/InputField";

interface SearchForm {
  search: string;
}

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const methods = useForm<SearchForm>({
    defaultValues: { search: "" },
  });

  const handleSearch = (data: SearchForm) => {
    console.log("جستجو:", data.search);
  };

  const notifications = [
    { id: 1, title: "موجودی کالا کم است", time: "۵ دقیقه پیش", read: false },
    { id: 2, title: "فاکتور جدید ثبت شد", time: "۱ ساعت پیش", read: false },
    {
      id: 3,
      title: "تامین‌کننده جدید اضافه شد",
      time: "۳ ساعت پیش",
      read: true,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="fixed top-0 right-64 left-0 h-16 bg-white border-b border-gray-200 z-30">
      <div className="h-full px-6 flex items-center justify-between">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="lg:hidden !bg-transparent !text-gray-600 hover:!bg-gray-100 !p-2"
        >
          <Menu className="w-5 h-5" />
        </Button>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleSearch)}
            className="hidden md:block w-80 text-right"
          >
            <div className="relative items-center">
              <InputField
                name="search"
                label=""
                placeholder="جستجو در انبار..."
                className="w-full"
              />

              <Button
                variant="secondary"
                size="sm"
                type="submit"
                className="absolute left-1 top-1/2 transform -translate-y-1/2 !bg-transparent !text-gray-400 hover:!text-blue-600 !p-1"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </FormProvider>

        <div className="flex items-center gap-1">
          <div className="relative">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowNotifications(!showNotifications)}
              className="!bg-transparent !text-gray-600 hover:!bg-gray-100 !p-2 relative"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </Button>

            {showNotifications && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-3 border-b border-gray-200">
                    <h3 className="font-bold text-gray-800">اعلان‌ها</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-3 border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer ${
                          !notif.read ? "bg-blue-50" : ""
                        }`}
                      >
                        <p className="text-sm text-gray-800">{notif.title}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notif.time}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 border-t border-gray-200">
                    <MainLink
                      to="/notifications"
                      color="blue"
                      className="block text-center text-sm py-1"
                    >
                      مشاهده همه اعلان‌ها
                    </MainLink>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="relative">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="!bg-transparent !text-gray-600 hover:!bg-gray-100 !p-1"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-white text-sm font-medium">AD</span>
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-gray-800">
                    مدیر سیستم
                  </p>
                  <p className="text-xs text-gray-500">admin@warehouse.com</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
              </div>
            </Button>

            {showUserMenu && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowUserMenu(false)}
                />
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-800">
                      مدیر سیستم
                    </p>
                    <p className="text-xs text-gray-500">admin@warehouse.com</p>
                  </div>
                  <div className="py-2">
                    <MainLink
                      to="/profile"
                      color="gray"
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      <User className="w-4 h-4" />
                      پروفایل
                    </MainLink>
                    <MainLink
                      to="/settings"
                      color="gray"
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      <Settings className="w-4 h-4" />
                      تنظیمات
                    </MainLink>
                    <hr className="my-1" />
                    <Button
                      variant="danger"
                      size="sm"
                      className="w-full !justify-start !bg-transparent !text-red-600 hover:!bg-red-50 !px-4 !py-2"
                      onClick={() => {
                        console.log("خروج");
                      }}
                    >
                      <LogOut className="w-4 h-4 ml-2" />
                      خروج از سیستم
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowMobileMenu(false)}
          />
          <div
            className="lg:hidden fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200">
              <span className="font-bold text-gray-800 text-lg">
                مدیریت انبار
              </span>
            </div>
            <nav className="p-3 space-y-1">
              <MainLink
                to="/home"
                className="block px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                داشبورد
              </MainLink>
              <MainLink
                to="/products"
                className="block px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                محصولات
              </MainLink>
              <MainLink
                to="/categories"
                className="block px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                دسته‌ها
              </MainLink>
              <MainLink
                to="/invoices"
                className="block px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                فاکتورها
              </MainLink>
              <hr className="my-2" />
              <Button
                variant="danger"
                size="sm"
                className="w-full mt-2"
                onClick={() => console.log("خروج")}
              >
                <LogOut className="w-4 h-4 ml-2" />
                خروج
              </Button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
