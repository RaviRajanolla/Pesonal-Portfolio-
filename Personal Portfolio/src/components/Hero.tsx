import React from 'react';
import { Download, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(
      'https://drive.google.com/file/d/1LSh_5gKJIPx1cmd24CRIY6DLZvgev_xF/view?usp=sharing',
      '_blank'
    );
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Ravi <span className="text-primary-500">Rajanolla</span>
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-gray-700 mb-6">
            Full Stack Java Developer
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Passionate about building responsive frontends and robust Java Spring Boot backends for real-world applications.
          </p>

          {/* 🌍 Availability Indicator */}
          <div className="flex items-center justify-center lg:justify-start text-gray-600 mb-4">
            <MapPin className="w-5 h-5 mr-2 text-primary-500" />
            <span className="text-base font-medium">
              Available for opportunities worldwide
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Hire Me Button */}
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 font-medium rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </button>

            {/* See Why I’m a Great Fit Button */}
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2 h-5 w-5" />
              See Why I’m a Great Fit
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-primary-100 to-primary-200 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/images/Decent.png"
                alt="Ravi Rajanolla - Java Full Stack Developer"
                className="w-full h-full object-cover object-top scale-110"
                style={{
                  objectPosition: '50% 15%',
                  transform: 'scale(1.15) translateY(-10px)',
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
