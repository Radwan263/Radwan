# دليل تحويل تطبيق نور الإسلام إلى APK

## نظرة عامة
تطبيق نور الإسلام هو تطبيق ويب ثابت (Static Web App) مبني بـ React و Tailwind CSS، وهو مصمم ليكون قابلاً للتحويل إلى تطبيق Android (APK) بسهولة.

## المتطلبات
- **Android Studio** أو أي أداة تطوير Android
- **Apache Cordova** أو **Capacitor** (مستحسن)
- **Node.js** و **npm/pnpm**
- **JDK 11 أو أحدث**

## الخطوات

### 1. بناء التطبيق (Build)
```bash
cd /home/ubuntu/noor_islam_app
pnpm build
```
هذا سينتج عن مجلد `dist/` يحتوي على ملفات HTML و CSS و JavaScript المجمعة.

### 2. استخدام Capacitor (الطريقة الموصى بها)

#### التثبيت:
```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

#### إضافة منصة Android:
```bash
npx cap add android
```

#### نسخ الملفات:
```bash
npx cap copy
```

#### فتح Android Studio:
```bash
npx cap open android
```

#### البناء والتوقيع:
1. في Android Studio، اذهب إلى `Build` → `Generate Signed Bundle / APK`
2. اختر `APK`
3. اتبع الخطوات لإنشاء مفتاح التوقيع (Keystore)
4. اختر `release` build variant

### 3. استخدام Cordova (بديل)

#### التثبيت:
```bash
npm install -g cordova
cordova create noor-islam-apk com.example.noorislamapp "نور الإسلام"
cd noor-islam-apk
cordova platform add android
```

#### نسخ الملفات:
```bash
cp -r ../dist/* www/
```

#### البناء:
```bash
cordova build android --release
```

### 4. ملفات مهمة للتطبيق

#### `config.xml` (لـ Cordova):
```xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="com.example.noorislamapp" version="1.0.0" xmlns="http://www.w3.org/ns/widgets">
    <name>نور الإسلام</name>
    <description>تطبيق إسلامي شامل</description>
    <author email="support@example.com" href="https://example.com">
        فريق نور الإسلام
    </author>
    <content src="index.html" />
    <preference name="Orientation" value="portrait" />
    <preference name="Fullscreen" value="false" />
    <preference name="BackgroundColor" value="0xffffffff" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
</widget>
```

#### `capacitor.config.ts` (لـ Capacitor):
```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.noorislamapp',
  appName: 'نور الإسلام',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
```

### 5. متطلبات الأمان والتوقيع

#### إنشاء مفتاح التوقيع:
```bash
keytool -genkey -v -keystore noor-islam-release-key.keystore \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias noor-islam-key
```

#### ملف التوقيع (gradle.properties):
```properties
RELEASE_STORE_FILE=noor-islam-release-key.keystore
RELEASE_STORE_PASSWORD=your_password
RELEASE_KEY_ALIAS=noor-islam-key
RELEASE_KEY_PASSWORD=your_password
```

## الميزات المدعومة

✅ **تصميم ديناميكي وسريع الاستجابة**
- يعمل بشكل مثالي على جميع أحجام الشاشات
- دعم كامل للغة العربية (RTL)
- تصميم جميل وسهل الاستخدام

✅ **الوظائف المتاحة**
- القرآن الكريم - تصفح السور والآيات
- الأحاديث النبوية - كتب الحديث الشريف
- الأذكار - مع تتبع الأذكار المكتملة
- السبحة الإلكترونية - عداد تفاعلي
- أسماء الله الحسنى - مع المعاني والفوائد
- الأدعية - مع نسخ الدعاء
- الصدقة الجارية - نموذج للدعاء

✅ **الأداء**
- تطبيق ثابت بدون خوادم معقدة
- تحميل سريع جداً
- استهلاك منخفض للبطارية والذاكرة

## ملاحظات مهمة

1. **الخصوصية**: التطبيق لا يجمع أي بيانات شخصية
2. **الحجم**: حجم APK سيكون حوالي 5-10 MB
3. **التوافقية**: يدعم Android 5.0 وما فوق
4. **التحديثات**: يمكن تحديث المحتوى بسهولة

## استكشاف الأخطاء

### المشكلة: التطبيق لا يعمل بشكل صحيح
**الحل**: تأكد من أن جميع الملفات تم نسخها بشكل صحيح إلى مجلد `www/`

### المشكلة: مشاكل في الخطوط العربية
**الحل**: تأكد من أن ملفات الخطوط موجودة في مجلد `assets/`

### المشكلة: الصور لا تظهر
**الحل**: تحقق من المسارات النسبية للصور في ملفات HTML

## المراجع الإضافية

- [Capacitor Documentation](https://capacitorjs.com/)
- [Cordova Documentation](https://cordova.apache.org/)
- [Android Studio Guide](https://developer.android.com/studio)
- [React Documentation](https://react.dev/)

## الدعم

للمساعدة والدعم، يرجى التواصل عبر البريد الإلكتروني أو فتح issue على GitHub.

---

**ملاحظة**: هذا التطبيق مفتوح المصدر ومتاح للاستخدام الشخصي والتعليمي.
