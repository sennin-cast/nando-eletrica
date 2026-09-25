/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ServicesGrid } from './components/ServicesGrid';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { EmergencyModal } from './components/EmergencyModal';
import { GalleryItem } from './data/electricalData';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [quoteServicePreload, setQuoteServicePreload] = useState<string | undefined>(undefined);

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setQuoteServicePreload(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#131315] text-[#e5e1e4] flex flex-col font-sans selection:bg-[#facc15] selection:text-[#131315]">
      {/* Top Header & Emergency Bar */}
      <Header onOpenEmergency={() => setEmergencyModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Section with Bento Gallery Showcase */}
        <Hero onSelectImage={(item) => setSelectedImage(item)} />

        {/* Credibility & Metrics Bar */}
        <MetricsBar />

        {/* Specialized Electrical & Security Services */}
        <ServicesGrid onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Real Works Gallery with Direct Image Links & Before/After Slider */}
        <PortfolioGallery onSelectImage={(item) => setSelectedImage(item)} />

        {/* Differentials & NBR 5410 Compliance Checklist */}
        <Differentials />

        {/* Customer Testimonials & Reviews in Rio */}
        <Testimonials />

        {/* Fast Quote Form with Live WhatsApp Preview */}
        <QuoteForm selectedServicePreload={quoteServicePreload} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Contacts */}
      <FloatingWhatsApp />

      {/* High-Resolution Image Lightbox Modal */}
      <ImageLightboxModal 
        item={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />

      {/* Emergency Technical Care Modal */}
      <EmergencyModal 
        isOpen={emergencyModalOpen} 
        onClose={() => setEmergencyModalOpen(false)} 
      />
    </div>
  );
}
