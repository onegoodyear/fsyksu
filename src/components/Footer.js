import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "الرئيسية" },
    { path: "/achievements", label: "الإنجازات" },
    { path: "/about", label: "من نحن" },
    { path: "/contact", label: "اتصل بنا" },
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 13.5l8-6V18H4V7.5l8 6zm0-2.25L4 5h16l-8 6.25z" />
        </svg>
      ),
      text: "info@ksu.edu.sa",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-green-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57.55 0 1 .45 1 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5c.55 0 1 .45 1 1 0 1.21.2 2.42.57 3.54.11.36.03.77-.24 1.05l-2.21 2.2z" />
        </svg>
      ),
      text: "+966 11 467 0000",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
        </svg>
      ),
      text: "جامعة الملك سعود، الرياض",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 8V4l8 8-8 8v-4H4V8z" />
        </svg>
      ),
      text: "الأحد - الخميس: 8:00 ص - 5:00 م",
    },
  ];

  return (
    <footer
      dir="rtl"
      className="bg-gradient-to-b from-[#005430] to-[#003d21] text-white"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-green-600 inline-block pb-1">
              عن المنصة
            </h3>
            <p className="text-green-100 leading-relaxed text-lg">
              منصة جامعة الملك سعود للاحتفال باليوم الوطني السعودي وإبراز
              إنجازات المملكة في المجال التقني والتكنولوجي ضمن رؤية 2030 الطموحة
              لبناء مستقبل مشرق.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-green-600 inline-block pb-1">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-green-100 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-green-600 inline-block pb-1">
              معلومات التواصل
            </h3>
            <ul className="space-y-2">
              {contactInfo.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center justify-start gap-2"
                >
                  <span className="text-green-300">{item.icon}</span>
                  <span className="text-green-100">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-6 p-4 bg-green-800 rounded-lg">
              <h4 className="font-semibold mb-2">النشرة البريدية</h4>
              <div className="flex flex-row-reverse gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-3 py-2 rounded text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded transition">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-green-200 text-sm space-y-2 md:space-y-0">
          <p>
            © {new Date().getFullYear()} جامعة الملك سعود. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-white"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="hover:text-white"
            >
              شروط الاستخدام
            </a>
            <a
              href="#"
              className="hover:text-white"
            >
              الأسئلة الشائعة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
