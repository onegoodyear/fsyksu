import React from "react";

export default function Home() {
  const achievements = [
    {
      title: "الريادة في الجيل الخامس",
      description: "المركز الأول عالمياً في سرعات تحميل شبكات الجيل الخامس",
      icon: "⚡",
      stats: "سرعة 500 ميجابت/ثانية",
      image: "5G.jpg",
    },
    {
      title: "الذكاء الاصطناعي",
      description: "وجهة رائدة للاستثمار في الذكاء الاصطناعي والبيانات",
      icon: "🤖",
      stats: "استثمارات بـ 20 مليار ريال",
      image: "ai.jpg",
    },
    {
      title: "مدينة نيوم",
      description: "أكبر مشروع ذكي مستدام في العالم",
      icon: "🏙️",
      stats: "استثمار 500 مليار دولار",
      image: "neom.jpg",
    },
    {
      title: "الأقمار الاصطناعية",
      description: "إطلاق سلسلة أقمار سعودية للاتصالات والاستشعار",
      icon: "🛰️",
      stats: "6 أقمار اصطناعية مخططة",
      image: "satellite.jpg",
    },
  ];

  const upcomingEvents = [
    {
      title: "قمة التقنية السعودية 2024",
      date: "15 مارس 2024",
      location: "الرياض",
      description: "أكبر تجمع للتقنيين والمبتكرين في المملكة",
    },
    {
      title: "معرض الابتكار الرقمي",
      date: "22 أبريل 2024",
      location: "جدة",
      description: "عرض أحدث التقنيات الرقمية والحلول الذكية",
    },
    {
      title: "هاكاثون الذكاء الاصطناعي",
      date: "10 مايو 2024",
      location: "الدمام",
      description: "مسابقة برمجة للذكاء الاصطناعي والتعلم الآلي",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-6 md:space-y-0 md:space-x-6 md:space-x-reverse">
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src="/Flag_of_Saudi_Arabia.svg"
                alt="علم المملكة العربية السعودية"
                className="h-24 w-auto shadow-2xl rounded-lg"
              />
            </div>

            <div className="text-center md:text-right">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                95 عاماً من الإنجازات
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                نحتفل باليوم الوطني الـ95 للمملكة، مسيرة طويلة من الريادة
                والابتكار في مجالات التقنية والعلوم، حيث أصبحت المملكة محوراً
                عالمياً في الصناعة الرقمية والتقنية، واضعةً بصمتها على خريطة
                الابتكار والتميز.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              أبرز الإنجازات التقنية
            </h2>
            <p className="text-lg text-gray-600">
              إنجازات وضعت المملكة على الخريطة التقنية العالمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  {/* Card Image */}
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Icon */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 right-4 bg-yellow-500 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                    {achievement.stats}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              أرقام تدعو للفخر
            </h2>
            <p className="text-xl text-blue-100">
              إحصائيات تعكس التقدم التقني السعودي
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">١</div>
              <div className="text-blue-200">عالمياً في الجيل الخامس</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">٨</div>
              <div className="text-blue-200">عالمياً في البنية التحتية</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">٩٥٪</div>
              <div className="text-blue-200">تغطية الإنترنت</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">٢٠+</div>
              <div className="text-blue-200">مشروع ذكي عملاق</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              الفعاليات التقنية السابقة
            </h2>
            <p className="text-lg text-gray-600">
              فرص للتعلم والتفاعل مع أحدث التقنيات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100 hover:border-green-300 transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {event.title}
                  </h3>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <span className="ml-2">📅</span>
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="ml-2">📍</span>
                    {event.location}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-right">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            كن جزءاً من الرحلة التقنية
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المبتكرين والمطورين الذين يساهمون في بناء المستقبل
            الرقمي للمملكة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition duration-300">
              اكتشف المزيد
            </button>
            <button className="border border-white hover:bg-white hover:bg-opacity-10 text-white px-8 py-3 rounded-lg font-bold text-lg transition duration-300">
              انضم إلينا
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
