export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">عن المنصة</h1>
          <p className="text-lg mb-6 leading-relaxed">
            منصة إلكترونية تقدمية تحتفي باليوم الوطني السعودي
          </p>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center ml-3">
                <span className="text-white text-xl">💡</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">تعريف المنصة</h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                هذه الصفحة هي موقع تجريبي من إعداد نادي العلوم والتقنية للسنة
                الأولى المشتركة بجامعة الملك سعود للمشاركة في احتفال اليوم
                الوطني السعودي ٩٥.
              </p>

              <p className="text-lg">
                تهدف المنصة إلى التعريف بأنشطة الأندية العلمية والتقنية بالجامعة
                وإبراز جهود الطلاب في مجال الابتكار والتطوير التقني ضمن احتفالات
                اليوم الوطني.
              </p>

              <p className="text-lg">
                تم تطوير هذه المنصة كنموذج أولي يمكن تطويره وتوسعته مستقبلاً
                ليشمل كافة أنشطة الأندية الطلابية بالجامعة.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center ml-3">
                <span className="text-white text-xl">👥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                التواصل مع الأندية
              </h2>
            </div>

            <div
              className="space-y-6"
              dir="rtl"
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                نرحب بانضمامكم إلى مجتمعنا التقني والعلمي. يمكنكم التواصل مع
                الأندية الطلابية للمشاركة في الفعاليات والأنشطة أو الاستفسار عن
                المشاريع التقنية.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  نادي العلوم والتقنية
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center ml-3">
                      <span className="text-green-600 text-lg">📧</span>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 text-sm">البريد الإلكتروني</p>
                      <p className="text-gray-800 font-medium">
                        scitech.club@ksu.edu.sa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center ml-3">
                      <span className="text-blue-600 text-lg">📱</span>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 text-sm">مجموعة الواتساب</p>
                      <a
                        href="#"
                        className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("سيتم إضافة رابط مجموعة الواتساب قريباً");
                        }}
                      >
                        انضم إلى مجموعتنا
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center ml-3">
                      <span className="text-purple-600 text-lg">🏢</span>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 text-sm">المقر</p>
                      <p className="text-gray-800 font-medium">
                        السنة الأولى المشتركة - جامعة الملك سعود
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              الهدف الرئيسي
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              إنشاء منصة تواصل بين الطلاب والأندية العلمية وتشجيع الابتكار
              التقني في إطار احتفالات اليوم الوطني.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              المستهدفون
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              طلاب السنة الأولى المشتركة المهتمين بالعلوم والتقنية، وأعضاء
              الأندية الطلابية، والمهتمين بالابتكار التقني.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">انضم إلى مجتمعنا التقني</h2>
          <p className="text-blue-100 mb-6">
            سجل في الأندية العلمية وكن جزءاً من رحلة الابتكار والتطوير
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              onClick={() => {
                alert("سيتم تفعيل رابط التسجيل قريباً");
              }}
            >
              سجل الآن
            </button>
            <button
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition duration-300"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              اتصل بنا
            </button>
          </div>
        </section>

        {/* Note Section */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            ⓘ هذه منصة تجريبية قيد التطوير - الإصدار 1.0
          </p>
        </div>
      </div>
    </div>
  );
}
