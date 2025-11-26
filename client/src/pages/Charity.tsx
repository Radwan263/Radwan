import { useState } from 'react';
import { useLocation } from 'wouter';
import Sidebar from '@/components/Sidebar';
import { ChevronRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Charity() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setName('');
        setMessage('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 w-full">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 md:p-8">
            <button
              onClick={() => setLocation('/')}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <ChevronRight size={20} />
              <span>العودة</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">صدقة جارية</h1>
            <p className="text-lg opacity-90">ادعُ لمن تحب بصدقة جارية</p>
          </div>

          <div className="p-6 md:p-8 max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">عن الصدقة الجارية</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  قال رسول الله صلى الله عليه وسلم: "إذا مات ابن آدم انقطع عمله إلا من ثلاث:
                  صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له"
                </p>
                <p>
                  الصدقة الجارية هي التي تستمر في إفادة الناس بعد وفاة الإنسان، وتعتبر من أفضل الأعمال
                  التي يتركها الإنسان لينتفع بها بعد موته.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="islamic-card p-8">
                <h3 className="subtitle text-xl font-bold text-primary mb-6">
                  أرسل دعاء لمن تحب
                </h3>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold text-center">
                      ✓ تم إرسال دعاؤك بنجاح. اللهم تقبل منك.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      اسم المتوفى أو من تدعو له
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="أدخل الاسم"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      الدعاء
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="اكتب دعاؤك..."
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    إرسال الدعاء
                  </Button>
                </form>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="islamic-card p-6 bg-blue-50 border-2 border-blue-200">
                  <h4 className="subtitle text-lg font-bold text-blue-700 mb-3">
                    فضائل الصدقة الجارية
                  </h4>
                  <ul className="space-y-2 text-blue-900 text-sm">
                    <li>✓ تستمر الأجور بعد الموت</li>
                    <li>✓ تنفع الإنسان في قبره</li>
                    <li>✓ تخفف عن المتوفى العذاب</li>
                    <li>✓ تدل على كرم النفس</li>
                    <li>✓ تقرب من الله تعالى</li>
                  </ul>
                </div>

                <div className="islamic-card p-6 bg-green-50 border-2 border-green-200">
                  <h4 className="subtitle text-lg font-bold text-green-700 mb-3">
                    أمثلة على الصدقة الجارية
                  </h4>
                  <ul className="space-y-2 text-green-900 text-sm">
                    <li>• بناء مسجد أو مدرسة</li>
                    <li>• حفر بئر ماء</li>
                    <li>• غراسة شجرة</li>
                    <li>• تأليف كتاب علمي</li>
                    <li>• تعليم العلم النافع</li>
                  </ul>
                </div>

                <div className="islamic-card p-6 bg-purple-50 border-2 border-purple-200">
                  <h4 className="subtitle text-lg font-bold text-purple-700 mb-3">
                    الدعاء للمتوفى
                  </h4>
                  <p className="text-purple-900 text-sm leading-relaxed">
                    من أفضل الصدقات الجارية الدعاء للمتوفى، فالدعاء ينفعه في قبره ويخفف عنه العذاب.
                    قال النبي صلى الله عليه وسلم: "ما من مسلم يموت فيقوم على قبره أربعون رجلاً لم يشركوا بالله شيئاً
                    إلا شفعهم الله فيه"
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Prayers */}
            <div className="mt-12">
              <h3 className="subtitle text-xl font-bold text-primary mb-6">
                أدعية حديثة
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'والدتي الحاجة فاطمة', dua: 'اللهم اغفر لها وارحمها وأسكنها فسيح جناتك' },
                  { name: 'والدي رحمه الله', dua: 'اللهم اغفر له وارحمه وعافه واعف عنه' },
                  { name: 'أخي محمود', dua: 'اللهم اشفه شفاء لا يغادر سقماً' }
                ].map((prayer, index) => (
                  <div
                    key={index}
                    className="islamic-card p-4 fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="font-semibold text-primary mb-2">{prayer.name}</p>
                    <p className="text-foreground/80 text-sm">"{prayer.dua}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
