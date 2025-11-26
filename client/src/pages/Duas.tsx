import { useState } from 'react';
import { useLocation } from 'wouter';
import Sidebar from '@/components/Sidebar';
import { ChevronRight, Copy, Check } from 'lucide-react';

interface Dua {
  id: string;
  text: string;
  benefit: string;
  source: string;
}

interface DuaCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  duas: Dua[];
}

const duaCategories: DuaCategory[] = [
  {
    id: 'morning',
    title: 'أدعية الصباح والمساء',
    description: 'أدعية مختارة للصباح والمساء',
    icon: '🌅',
    duas: [
      {
        id: '1',
        text: 'اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور',
        benefit: 'الاستعانة بالله والتوكل عليه',
        source: 'السنة'
      },
      {
        id: '2',
        text: 'اللهم إني أسألك العفو والعافية في الدنيا والآخرة',
        benefit: 'طلب العفو والعافية',
        source: 'سنن ابن ماجه'
      }
    ]
  },
  {
    id: 'distress',
    title: 'دعاء عند الكرب والضيق',
    description: 'أدعية للتخفيف من الكرب والهم',
    icon: '😔',
    duas: [
      {
        id: '1',
        text: 'لا إله إلا أنت سبحانك إني كنت من الظالمين',
        benefit: 'دعاء ذو النون عند الكرب',
        source: 'القرآن الكريم'
      }
    ]
  },
  {
    id: 'forgiveness',
    title: 'أدعية المغفرة والتوبة',
    description: 'أدعية للاستغفار والتوبة',
    icon: '🤲',
    duas: [
      {
        id: '1',
        text: 'اللهم اغفر لي ذنبي كله دقه وجله أوله وآخره علانيته وسره',
        benefit: 'طلب المغفرة الشاملة',
        source: 'صحيح مسلم'
      }
    ]
  }
];

export default function Duas() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<DuaCategory | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 w-full">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 md:p-8">
            <button
              onClick={() => setLocation('/')}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <ChevronRight size={20} />
              <span>العودة</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">أدعية وفضلها</h1>
            <p className="text-lg opacity-90">أدعية مختارة من القرآن والسنة</p>
          </div>

          <div className="p-6 md:p-8 max-w-6xl mx-auto">
            {!selectedCategory ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">أقسام الأدعية</h2>
                  <p className="text-foreground/70 mb-6">
                    اختر قسماً من الأدعية لقراءة أدعية مختارة
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {duaCategories.map((category, index) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category)}
                      className="islamic-card p-8 text-center hover:shadow-lg transition-all duration-300 fade-in group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="subtitle text-xl font-bold text-primary mb-2">
                        {category.title}
                      </h3>
                      <p className="text-foreground/70 text-sm">
                        {category.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-foreground/60">
                          {category.duas.length} دعاء
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 mb-6 text-primary hover:opacity-70 transition-opacity"
                >
                  <ChevronRight size={20} />
                  <span>العودة للأقسام</span>
                </button>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    {selectedCategory.title}
                  </h2>
                  <p className="text-foreground/70">
                    {selectedCategory.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {selectedCategory.duas.map((dua, index) => (
                    <div
                      key={dua.id}
                      className="islamic-card p-6 fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <p className="text-lg leading-relaxed text-foreground font-semibold flex-1">
                          "{dua.text}"
                        </p>
                        <button
                          onClick={() => copyToClipboard(dua.text, dua.id)}
                          className="flex-shrink-0 ml-4 p-2 hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          {copiedId === dua.id ? (
                            <Check size={20} className="text-green-500" />
                          ) : (
                            <Copy size={20} className="text-foreground/50 hover:text-primary" />
                          )}
                        </button>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-border">
                        <div className="bg-primary/5 rounded p-3">
                          <p className="text-sm text-foreground/70 mb-1">الفائدة:</p>
                          <p className="text-sm text-foreground font-semibold">
                            {dua.benefit}
                          </p>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground/70">المصدر:</span>
                          <span className="text-primary font-semibold">
                            {dua.source}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
