import { useState } from 'react';
import { useLocation } from 'wouter';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check } from 'lucide-react';

interface Dhikr {
  id: string;
  text: string;
  count: number;
  benefit: string;
}

interface AdhkarCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  adhkar: Dhikr[];
}

const adhkarCategories: AdhkarCategory[] = [
  {
    id: 'morning',
    title: 'أذكار الصباح',
    description: 'الأذكار المأثورة في الصباح',
    icon: '🌅',
    adhkar: [
      {
        id: 'morning-1',
        text: 'الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور',
        count: 1,
        benefit: 'شكر الله على الحياة'
      },
      {
        id: 'morning-2',
        text: 'أصبحنا وأصبح الملك لله والحمد لله، لا إله إلا الله وحده لا شريك له',
        count: 1,
        benefit: 'توحيد الله'
      }
    ]
  },
  {
    id: 'evening',
    title: 'أذكار المساء',
    description: 'الأذكار المأثورة في المساء',
    icon: '🌙',
    adhkar: [
      {
        id: 'evening-1',
        text: 'أمسينا وأمسى الملك لله والحمد لله',
        count: 1,
        benefit: 'التوكل على الله'
      }
    ]
  }
];

export default function Adhkar() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<AdhkarCategory | null>(null);
  const [completedAdhkar, setCompletedAdhkar] = useState<Set<string>>(new Set());

  const toggleComplete = (id: string) => {
    const newCompleted = new Set(completedAdhkar);
    if (newCompleted.has(id)) {
      newCompleted.delete(id);
    } else {
      newCompleted.add(id);
    }
    setCompletedAdhkar(newCompleted);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 w-full">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 md:p-8">
            <button
              onClick={() => setLocation('/')}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <ChevronRight size={20} />
              <span>العودة</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">الأذكار</h1>
            <p className="text-lg opacity-90">حصن المسلم اليومي والأذكار المأثورة</p>
          </div>

          <div className="p-6 md:p-8 max-w-6xl mx-auto">
            {!selectedCategory ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">أقسام الأذكار</h2>
                  <p className="text-foreground/70 mb-6">
                    اختر قسماً من الأذكار لقراءة وترديد الأذكار المأثورة
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {adhkarCategories.map((category, index) => (
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
                          {category.adhkar.length} أذكار
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
                  {selectedCategory.adhkar.map((dhikr, index) => {
                    const isCompleted = completedAdhkar.has(dhikr.id);
                    return (
                      <div
                        key={dhikr.id}
                        className="islamic-card p-6 fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          <button
                            onClick={() => toggleComplete(dhikr.id)}
                            className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                              isCompleted
                                ? 'bg-green-500 border-green-500'
                                : 'border-primary hover:bg-primary/10'
                            }`}
                          >
                            {isCompleted && (
                              <Check size={16} className="text-white" />
                            )}
                          </button>
                          <div className="flex-1">
                            <p className="text-lg leading-relaxed text-foreground mb-3">
                              {dhikr.text}
                            </p>
                            <div className="flex justify-between items-center text-sm text-foreground/60 pt-3 border-t border-border">
                              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                                {dhikr.count}x
                              </span>
                              <span>{dhikr.benefit}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg text-center">
                  <p className="text-green-800 font-semibold">
                    تم إكمال {completedAdhkar.size} من {selectedCategory.adhkar.length} أذكار
                  </p>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
