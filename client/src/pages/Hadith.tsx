import { useState } from 'react';
import { useLocation } from 'wouter';
import Sidebar from '@/components/Sidebar';
import { ChevronRight, Heart } from 'lucide-react';

interface Hadith {
  id: string;
  text: string;
  narrator: string;
  source: string;
}

interface HadithBook {
  id: string;
  title: string;
  author: string;
  icon: string;
  hadithCount: number;
  hadith: Hadith[];
}

const hadithBooks: HadithBook[] = [
  {
    id: 'sahih-bukhari',
    title: 'صحيح البخاري',
    author: 'محمد بن إسماعيل البخاري',
    icon: '📖',
    hadithCount: 7563,
    hadith: [
      {
        id: '1',
        text: 'إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى',
        narrator: 'عمر بن الخطاب',
        source: 'صحيح البخاري - كتاب بدء الوحي'
      },
      {
        id: '2',
        text: 'من غدا يريد الدنيا بعمل الآخرة لم يكن له من الآخرة نصيب',
        narrator: 'أبو هريرة',
        source: 'صحيح البخاري'
      }
    ]
  },
  {
    id: 'sahih-muslim',
    title: 'صحيح مسلم',
    author: 'مسلم بن الحجاج',
    icon: '📚',
    hadithCount: 7563,
    hadith: [
      {
        id: '1',
        text: 'المؤمن للمؤمن كالبنيان يشد بعضه بعضا',
        narrator: 'أبو موسى الأشعري',
        source: 'صحيح مسلم'
      }
    ]
  },
  {
    id: 'sunan-tirmidhi',
    title: 'سنن الترمذي',
    author: 'محمد بن عيسى الترمذي',
    icon: '📕',
    hadithCount: 3956,
    hadith: [
      {
        id: '1',
        text: 'خيركم خيركم لأهله وأنا خيركم لأهلي',
        narrator: 'عائشة رضي الله عنها',
        source: 'سنن الترمذي'
      }
    ]
  }
];

export default function Hadith() {
  const [, setLocation] = useLocation();
  const [selectedBook, setSelectedBook] = useState<HadithBook | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 w-full">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 md:p-8">
            <button
              onClick={() => setLocation('/')}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <ChevronRight size={20} />
              <span>العودة</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">الأحاديث النبوية</h1>
            <p className="text-lg opacity-90">تصفح كتب الحديث الشريف والسنة النبوية</p>
          </div>

          <div className="p-6 md:p-8 max-w-6xl mx-auto">
            {!selectedBook ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">كتب الحديث</h2>
                  <p className="text-foreground/70 mb-6">
                    اختر كتاباً من كتب الحديث الشريف لقراءة الأحاديث
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hadithBooks.map((book, index) => (
                    <button
                      key={book.id}
                      onClick={() => setSelectedBook(book)}
                      className="islamic-card p-6 text-right hover:shadow-lg transition-all duration-300 fade-in group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {book.icon}
                      </div>
                      <h3 className="subtitle text-xl font-bold text-primary mb-2">
                        {book.title}
                      </h3>
                      <p className="text-sm text-foreground/70 mb-3">
                        {book.author}
                      </p>
                      <div className="pt-3 border-t border-border">
                        <p className="text-xs text-foreground/60">
                          {book.hadithCount} حديث
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setSelectedBook(null)}
                  className="flex items-center gap-2 mb-6 text-primary hover:opacity-70 transition-opacity"
                >
                  <ChevronRight size={20} />
                  <span>العودة لكتب الحديث</span>
                </button>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    {selectedBook.title}
                  </h2>
                  <p className="text-foreground/70 mb-2">
                    تأليف: {selectedBook.author}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {selectedBook.hadithCount} حديث شريف
                  </p>
                </div>

                <div className="space-y-4">
                  {selectedBook.hadith.map((hadith, index) => {
                    const isFavorite = favorites.has(hadith.id);
                    return (
                      <div
                        key={hadith.id}
                        className="islamic-card p-6 fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <p className="text-lg leading-relaxed text-foreground font-semibold mb-3">
                              "{hadith.text}"
                            </p>
                          </div>
                          <button
                            onClick={() => toggleFavorite(hadith.id)}
                            className="flex-shrink-0 ml-4"
                          >
                            <Heart
                              size={24}
                              className={`transition-all duration-300 ${
                                isFavorite
                                  ? 'fill-red-500 text-red-500'
                                  : 'text-foreground/30 hover:text-red-500'
                              }`}
                            />
                          </button>
                        </div>

                        <div className="space-y-2 pt-4 border-t border-border">
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground/70">الراوي:</span>
                            <span className="text-primary font-semibold">
                              {hadith.narrator}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground/70">المصدر:</span>
                            <span className="text-foreground/80">
                              {hadith.source}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
