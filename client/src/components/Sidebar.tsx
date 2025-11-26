import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  description: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'quran',
    label: 'القرآن الكريم',
    icon: '📖',
    description: 'تصفح وقراءة السور والآيات',
    href: '/quran'
  },
  {
    id: 'hadith',
    label: 'الأحاديث النبوية',
    icon: '📜',
    description: 'تصفح كتب الحديث الشريف',
    href: '/hadith'
  },
  {
    id: 'adhkar',
    label: 'الأذكار',
    icon: '🤲',
    description: 'حصن المسلم اليومي',
    href: '/adhkar'
  },
  {
    id: 'rosary',
    label: 'السبحة الإلكترونية',
    icon: '📿',
    description: 'ابدأ التسبيح الآن',
    href: '/rosary'
  },
  {
    id: 'duas',
    label: 'أدعية وفضلها',
    icon: '🙌',
    description: 'أدعية من القرآن والسنة',
    href: '/duas'
  },
  {
    id: 'asma',
    label: 'أسماء الله الحسنى',
    icon: '✨',
    description: 'تعرف على أسماء الله وصفاته',
    href: '/asma'
  },
  {
    id: 'charity',
    label: 'صدقة جارية',
    icon: '❤️',
    description: 'ادعُ لمن تحب بصدقة جارية',
    href: '/charity'
  }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground shadow-lg transform transition-transform duration-300 z-40 md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:w-72 overflow-y-auto`}
        dir="rtl"
      >
        {/* Header */}
        <div className="bg-gradient-to-b from-primary to-primary/80 text-primary-foreground p-6 sticky top-0">
          <h1 className="text-3xl font-bold text-center mb-2">نور الإسلام</h1>
          <p className="text-sm text-center opacity-90">تطبيق إسلامي شامل</p>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <Link key={item.id} href={item.href}>
              <a
                onClick={() => setIsOpen(false)}
                className="islamic-card p-4 block hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="subtitle text-sm font-semibold">{item.label}</h3>
                    <p className="text-xs text-sidebar-foreground/70 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/10 to-transparent p-4 border-t border-sidebar-border">
          <p className="text-xs text-center text-sidebar-foreground/70">
            © 2025 نور الإسلام
          </p>
          <p className="text-xs text-center text-sidebar-foreground/60 mt-2">
            تطبيق إسلامي مفيد
          </p>
        </div>
      </aside>
    </>
  );
}
