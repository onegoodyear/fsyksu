import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "الرئيسية" },
    { path: "/about", label: "من نحن" },
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      text: "info@ksu.edu.sa",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      text: "+966 11 467 0000",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      text: "جامعة الملك سعود، الرياض",
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
      url: "#",
      color: "hover:text-blue-300",
    },
    {
      name: "Facebook",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
      url: "#",
      color: "hover:text-pink-300",
    },
  ];

  return (
    <footer
      dir="rtl"
      className="bg-gradient-to-br from-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              اليوم الوطني السعودي
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              منصة جامعة الملك سعود للاحتفال باليوم الوطني السعودي وإبراز
              إنجازات المملكة في المجال التقني والتكنولوجي ضمن رؤية 2030
              الطموحة.
            </p>
            <div className="flex justify-start space-x-4 space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`bg-gray-700 p-3 rounded-lg transition duration-300 hover:bg-gray-600 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-blue-500 inline-block">
              الروابط السريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full ml-3 group-hover:bg-purple-400 transition duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-purple-500 inline-block">
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start gap-3 text-gray-300"
                >
                  <span className="text-blue-400">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-gray-700 rounded-lg">
              <h4 className="font-semibold mb-3 text-blue-200">
                النشرة البريدية
              </h4>
              <div className="flex flex-row-reverse gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-3 py-2 rounded text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded text-sm transition duration-300">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} جامعة الملك سعود. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-blue-300 transition duration-300"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition duration-300"
            >
              شروط الاستخدام
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition duration-300"
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
