'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { aboutContent } from '@/lib/content/about';

export default function AboutPage() {
  const { locale } = useLocale();
  const t = aboutContent[locale];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
        
        {/* Profile Image Placeholder */}
        <div className="w-48 h-48 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-400">Your Photo</span>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-3xl mx-auto mb-16">
        {t.bio.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Skills Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6">{t.skills.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {t.skills.list.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg text-center font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6">{t.experience.title}</h2>
        <div className="space-y-6">
          {t.experience.items.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold">{item.role}</h3>
              <p className="text-gray-600 mb-2">
                {item.company} • {item.period}
              </p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">{t.cta}</h2>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          {t.ctaButton}
        </a>
      </div>
    </div>
  );
}