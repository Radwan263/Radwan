import { Link } from 'wouter';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

const features: Feature[] = [
  {
    id: 'quran',
    title: 'القرآن الكريم',
    description: 'تصفح وقراءة السور والآيات الكريمة',
    icon: '📖',
    color: 'from-blue-500 to-blue-600',
    href: '/quran'
  },
  {
    id: 'hadith',
    title: 'الأحاديث النبوية',
    description: 'تصفح كتب الحديث الشريف والسنة النبوية',
    icon: '📜',
    color: 'from-amber-500 to-amber-600',
    href: '/hadith'
  },
  {
    id: 'adhkar',
    title: 'الأذكار',
    description: 'حصن المسلم اليومي والأذكار المأثورة',
    icon: '🤲',
    color: 'from-green-500 to-green-600',
    href: '/adhkar'
  },
  {
    id: 'rosary',
    title: 'السبحة الإلكترونية',
    description: 'ابدأ التسبيح والتكبير والتهليل',
    icon: '📿',
    color: 'from-rose-500 to-rose-600',
    href: '/rosary'
  },
  {
    id: 'duas',
    title: 'أدعية وفضلها',
    description: 'أدعية مختارة من القرآن والسنة',
    icon: '🙌',
    color: 'from-purple-500 to-purple-600',
    href: '/duas'
  },
  {
    id: 'asma',
    title: 'أسماء الله الحسنى',
    description: 'تعرف على أسماء الله وصفاته العظيمة',
    icon: '✨',
    color: 'from-yellow-500 to-yellow-600',
    href: '/asma'
  },
  {
    id: 'charity',
    title: 'صدقة جارية',
    description: 'ادعُ لمن تحب بصدقة جارية',
    icon: '❤️',
    color: 'from-red-500 to-red-600',
    href: '/charity'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 w-full">
          {/* Hero Section */}
          <section
            className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: 'url(/islamic-pattern-hero.jpg)',
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">نور الإسلام</h1>
              <p className="text-xl md:text-2xl mb-8">تطبيقك الإسلامي الشامل</p>
              <p className="text-lg opacity-90">وجهتك الأولى للقرآن والحديث والأذكار والأدعية</p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">أقسام التطبيق</h2>
              <div className="islamic-divider"></div>
              <p className="text-lg text-foreground/70">
                استكشف مجموعة شاملة من الموارد الإسلامية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Link key={feature.id} href={feature.href}>
                  <a
                    className="islamic-card overflow-hidden hover:shadow-xl transition-all duration-300 fade-in group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Color Bar */}
                    <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="subtitle text-xl font-bold mb-2 text-primary">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        اكتشف المزيد
                      </Button>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 px-4 md:px-8 bg-primary/5">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">عن التطبيق</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                تطبيق نور الإسلام هو منصة شاملة تجمع بين أهم الموارد الإسلامية في مكان واحد.
                يوفر التطبيق وصولاً سهلاً إلى القرآن الكريم والأحاديث النبوية والأذكار والأدعية
                وأسماء الله الحسنى، مما يساعدك على تعميق معرفتك الإسلامية وتحسين ممارساتك العبادية.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                سواء كنت تبحث عن آية قرآنية أو حديث شريف أو دعاء مستجاب، فإن نور الإسلام
                هنا لمساعدتك في رحلتك الروحية والعلمية.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-primary text-primary-foreground py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">نور الإسلام</h3>
                  <p className="text-sm opacity-90">تطبيق إسلامي شامل</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-3">الأقسام الرئيسية</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>القرآن الكريم</li>
                    <li>الأحاديث النبوية</li>
                    <li>الأذكار والأدعية</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-3">معلومات</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>عن التطبيق</li>
                    <li>الشروط والأحكام</li>
                    <li>سياسة الخصوصية</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
                <p>© 2025 نور الإسلام. جميع الحقوق محفوظة.</p>
                <p className="mt-2">تطبيق مفتوح المصدر مكرس للعلم الإسلامي</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
