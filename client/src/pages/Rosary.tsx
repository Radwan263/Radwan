import { useState } from 'react';
import { useLocation } from 'wouter';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { ChevronRight, RotateCcw } from 'lucide-react';

interface RosaryMode {
  id: string;
  label: string;
  text: string;
  color: string;
}

const rosaryModes: RosaryMode[] = [
  {
    id: 'subhan',
    label: 'سبحان الله',
    text: 'سبحان الله',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'alhamdulillah',
    label: 'الحمد لله',
    text: 'الحمد لله',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'allahu-akbar',
    label: 'الله أكبر',
    text: 'الله أكبر',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'la-ilaha',
    label: 'لا إله إلا الله',
    text: 'لا إله إلا الله',
    color: 'from-purple-500 to-purple-600'
  }
];

export default function Rosary() {
  const [, setLocation] = useLocation();
  const [selectedMode, setSelectedMode] = useState<RosaryMode | null>(null);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleSelectMode = (mode: RosaryMode) => {
    setSelectedMode(mode);
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 w-full">
          <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white p-6 md:p-8">
            <button
              onClick={() => setLocation('/')}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <ChevronRight size={20} />
              <span>العودة</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">السبحة الإلكترونية</h1>
            <p className="text-lg opacity-90">ابدأ التسبيح والتكبير والتهليل</p>
          </div>

          <div className="p-6 md:p-8 max-w-4xl mx-auto">
            {!selectedMode ? (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">اختر نوع التسبيح</h2>
                  <p className="text-foreground/70 mb-6">
                    اختر من الأذكار التالية لبدء العد
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {rosaryModes.map((mode, index) => (
                    <button
                      key={mode.id}
                      onClick={() => handleSelectMode(mode)}
                      className={`islamic-card p-8 text-center hover:shadow-lg transition-all duration-300 fade-in group bg-gradient-to-br ${mode.color} text-white`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h3 className="text-2xl font-bold mb-2">
                        {mode.label}
                      </h3>
                      <p className="text-sm opacity-90">
                        اضغط للبدء
                      </p>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setSelectedMode(null)}
                  className="flex items-center gap-2 mb-8 text-primary hover:opacity-70 transition-opacity"
                >
                  <ChevronRight size={20} />
                  <span>اختر نوع آخر</span>
                </button>

                <div className="flex flex-col items-center justify-center min-h-96">
                  {/* Counter Circle */}
                  <div className={`w-64 h-64 rounded-full flex items-center justify-center mb-8 bg-gradient-to-br ${selectedMode.color} text-white shadow-2xl`}>
                    <div className="text-center">
                      <p className="text-lg opacity-90 mb-2">العدد</p>
                      <p className="text-8xl font-bold">{count}</p>
                    </div>
                  </div>

                  {/* Dhikr Text */}
                  <div className="text-center mb-8 p-6 bg-primary/5 rounded-lg w-full">
                    <p className="text-3xl font-bold text-primary">
                      {selectedMode.text}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 flex-wrap justify-center">
                    <Button
                      onClick={handleIncrement}
                      className={`px-12 py-6 text-xl font-bold bg-gradient-to-r ${selectedMode.color} text-white hover:opacity-90`}
                    >
                      +1
                    </Button>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <RotateCcw size={20} className="ml-2" />
                      إعادة تعيين
                    </Button>
                  </div>

                  {/* Quick Add Buttons */}
                  <div className="mt-8 flex gap-2 flex-wrap justify-center">
                    {[10, 33, 100].map((num) => (
                      <Button
                        key={num}
                        onClick={() => setCount(count + num)}
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary/10"
                      >
                        +{num}
                      </Button>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mt-12 w-full grid grid-cols-3 gap-4 text-center">
                    <div className="islamic-card p-4">
                      <p className="text-sm text-foreground/70 mb-2">المجموع</p>
                      <p className="text-2xl font-bold text-primary">{count}</p>
                    </div>
                    <div className="islamic-card p-4">
                      <p className="text-sm text-foreground/70 mb-2">الأسبوع</p>
                      <p className="text-2xl font-bold text-primary">0</p>
                    </div>
                    <div className="islamic-card p-4">
                      <p className="text-sm text-foreground/70 mb-2">الشهر</p>
                      <p className="text-2xl font-bold text-primary">0</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
