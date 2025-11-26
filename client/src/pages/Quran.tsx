import { useState } from 'react';
import { useLocation } from 'wouter';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface Surah {
  number: number;
  name: string;
  englishName: string;
  ayahs: number;
  revelationType: string;
}

const surahs: Surah[] = [
  { number: 1, name: 'الفاتحة', englishName: 'Al-Fatiha', ayahs: 7, revelationType: 'Meccan' },
  { number: 2, name: 'البقرة', englishName: 'Al-Baqarah', ayahs: 286, revelationType: 'Medinan' },
  { number: 3, name: 'آل عمران', englishName: 'Al-Imran', ayahs: 200, revelationType: 'Medinan' },
  { number: 4, name: 'النساء', englishName: 'An-Nisa', ayahs: 176, revelationType: 'Medinan' },
  { number: 5, name: 'المائدة', englishName: 'Al-Maidah', ayahs: 120, revelationType: 'Medinan' },
  { number: 6, name: 'الأنعام', englishName: 'Al-Anam', ayahs: 165, revelationType: 'Meccan' },
  { number: 7, name: 'الأعراف', englishName: 'Al-Araf', ayahs: 206, revelationType: 'Meccan' },
  { number: 8, name: 'الأنفال', englishName: 'Al-Anfal', ayahs: 75, revelationType: 'Medinan' },
  { number: 9, name: 'التوبة', englishName: 'At-Tawbah', ayahs: 129, revelationType: 'Medinan' },
  { number: 10, name: 'يونس', englishName: 'Yunus', ayahs: 109, revelationType: 'Meccan' },
];

export default function Quran() {
  const [, setLocation] = useLocation();
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 md:p-8">
            <button
              onClick={() => setLocation('/')}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <ChevronRight size={20} />
              <span>العودة</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">القرآن الكريم</h1>
            <p className="text-lg opacity-90">تصفح وقراءة السور والآيات الكريمة</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 max-w-6xl mx-auto">
            {!selectedSurah ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">السور الكريمة</h2>
                  <p className="text-foreground/70 mb-6">
                    اختر سورة لقراءة آياتها الكريمة
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {surahs.map((surah, index) => (
                    <button
                      key={surah.number}
                      onClick={() => setSelectedSurah(surah)}
                      className="islamic-card p-6 text-right hover:shadow-lg transition-all duration-300 fade-in group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="subtitle text-lg font-bold text-primary mb-1">
                            {surah.name}
                          </h3>
                          <p className="text-sm text-foreground/60">
                            {surah.englishName}
                          </p>
                        </div>
                        <div className="text-2xl font-bold text-primary/50">
                          {surah.number}
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-foreground/60 pt-3 border-t border-border">
                        <span>{surah.ayahs} آية</span>
                        <span>{surah.revelationType}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setSelectedSurah(null)}
                  className="flex items-center gap-2 mb-6 text-primary hover:opacity-70 transition-opacity"
                >
                  <ChevronRight size={20} />
                  <span>العودة للسور</span>
                </button>

                <div className="islamic-card p-8 mb-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-primary mb-2">
                      {selectedSurah.name}
                    </h2>
                    <p className="text-foreground/70 mb-4">
                      {selectedSurah.englishName}
                    </p>
                    <div className="islamic-divider"></div>
                    <div className="flex justify-center gap-6 text-sm text-foreground/60 mt-6">
                      <span>السورة {selectedSurah.number}</span>
                      <span>•</span>
                      <span>{selectedSurah.ayahs} آية</span>
                      <span>•</span>
                      <span>{selectedSurah.revelationType}</span>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-8 text-center mb-8">
                    <p className="text-2xl leading-relaxed text-primary font-semibold">
                      بسم الله الرحمن الرحيم
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map((ayah) => (
                      <div key={ayah} className="border-b border-border pb-6 last:border-b-0">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            {ayah}
                          </div>
                          <p className="text-lg leading-relaxed text-foreground">
                            هذا نص توضيحي للآية {ayah} من سورة {selectedSurah.name}. 
                            يمكنك هنا قراءة النصوص القرآنية الكاملة مع التفسير والشرح.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    السورة السابقة
                  </Button>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    السورة التالية
                  </Button>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
