import { useState } from 'react';
import { useLocation } from 'wouter';
import Sidebar from '@/components/Sidebar';
import { ChevronRight, Volume2 } from 'lucide-react';

interface AsmaAllah {
  id: number;
  name: string;
  meaning: string;
  benefit: string;
}

const asmaAllah: AsmaAllah[] = [
  {
    id: 1,
    name: 'الله',
    meaning: 'المعبود الحق الذي لا معبود سواه',
    benefit: 'التوحيد والإخلاص'
  },
  {
    id: 2,
    name: 'الرحمن',
    meaning: 'ذو الرحمة الواسعة التي وسعت كل شيء',
    benefit: 'الرجاء والطمع في رحمته'
  },
  {
    id: 3,
    name: 'الرحيم',
    meaning: 'الرقيق الرفيق الذي يرحم عباده',
    benefit: 'الرجاء والخوف'
  },
  {
    id: 4,
    name: 'الملك',
    meaning: 'المالك لكل شيء والمتصرف فيه',
    benefit: 'الخضوع والاستسلام'
  },
  {
    id: 5,
    name: 'القدوس',
    meaning: 'المنزه عن كل عيب ونقص',
    benefit: 'التنزيه والتعظيم'
  },
  {
    id: 6,
    name: 'السلام',
    meaning: 'السالم من كل عيب والمسلم لعباده',
    benefit: 'السلامة والأمان'
  },
  {
    id: 7,
    name: 'المؤمن',
    meaning: 'الذي آمن عباده من خوفه',
    benefit: 'الأمان والطمأنينة'
  },
  {
    id: 8,
    name: 'العزيز',
    meaning: 'القوي الذي لا يغلبه شيء',
    benefit: 'التوكل والثقة'
  },
  {
    id: 9,
    name: 'الجبار',
    meaning: 'الذي يجبر الكسر ويصلح الحال',
    benefit: 'الرجاء والطمع'
  },
  {
    id: 10,
    name: 'المتكبر',
    meaning: 'العظيم الذي لا أعظم منه',
    benefit: 'التعظيم والتوقير'
  }
];

export default function Asma() {
  const [, setLocation] = useLocation();
  const [selectedAsma, setSelectedAsma] = useState<AsmaAllah | null>(null);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 w-full">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-6 md:p-8">
            <button
              onClick={() => setLocation('/')}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <ChevronRight size={20} />
              <span>العودة</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">أسماء الله الحسنى</h1>
            <p className="text-lg opacity-90">تعرف على أسماء الله وصفاته العظيمة</p>
          </div>

          <div className="p-6 md:p-8 max-w-6xl mx-auto">
            {!selectedAsma ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">أسماء الله الحسنى</h2>
                  <p className="text-foreground/70 mb-6">
                    اختر اسماً من أسماء الله الحسنى لمعرفة معناه وفوائده
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {asmaAllah.map((asma, index) => (
                    <button
                      key={asma.id}
                      onClick={() => setSelectedAsma(asma)}
                      className="islamic-card p-6 text-center hover:shadow-lg transition-all duration-300 fade-in group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-3xl font-bold text-primary">
                          {asma.id}
                        </div>
                        <Volume2 size={20} className="text-primary/50 group-hover:text-primary" />
                      </div>
                      <h3 className="subtitle text-2xl font-bold text-primary mb-2">
                        {asma.name}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {asma.meaning.substring(0, 50)}...
                      </p>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setSelectedAsma(null)}
                  className="flex items-center gap-2 mb-8 text-primary hover:opacity-70 transition-opacity"
                >
                  <ChevronRight size={20} />
                  <span>العودة للأسماء</span>
                </button>

                <div className="islamic-card p-8 mb-8">
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-primary mb-4">
                      {selectedAsma.id}
                    </div>
                    <h2 className="text-5xl font-bold text-primary mb-4">
                      {selectedAsma.name}
                    </h2>
                    <div className="islamic-divider"></div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-primary/5 rounded-lg p-6">
                      <h3 className="subtitle text-lg font-bold text-primary mb-3">
                        المعنى
                      </h3>
                      <p className="text-lg leading-relaxed text-foreground">
                        {selectedAsma.meaning}
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                      <h3 className="subtitle text-lg font-bold text-green-700 mb-3">
                        الفوائد والآثار
                      </h3>
                      <p className="text-lg leading-relaxed text-green-900">
                        {selectedAsma.benefit}
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                      <h3 className="subtitle text-lg font-bold text-blue-700 mb-3">
                        كيفية الاستفادة
                      </h3>
                      <ul className="space-y-2 text-blue-900">
                        <li>• استحضر معنى هذا الاسم في عبادتك</li>
                        <li>• اطلب من الله بهذا الاسم</li>
                        <li>• تدبر آيات القرآن التي تتضمن هذا الاسم</li>
                        <li>• تخلق بصفات هذا الاسم قدر الإمكان</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      const index = asmaAllah.findIndex(a => a.id === selectedAsma.id);
                      if (index > 0) {
                        setSelectedAsma(asmaAllah[index - 1]);
                      }
                    }}
                    disabled={selectedAsma.id === 1}
                    className="islamic-card p-4 text-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    الاسم السابق
                  </button>
                  <button
                    onClick={() => {
                      const index = asmaAllah.findIndex(a => a.id === selectedAsma.id);
                      if (index < asmaAllah.length - 1) {
                        setSelectedAsma(asmaAllah[index + 1]);
                      }
                    }}
                    disabled={selectedAsma.id === asmaAllah.length}
                    className="islamic-card p-4 text-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    الاسم التالي
                  </button>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
