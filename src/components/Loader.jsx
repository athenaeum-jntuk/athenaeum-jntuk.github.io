import React from 'react';

export default function Loader() {
  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ 
        backgroundColor: '#0A0A0A',
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      {/* Brand Name */}
      <h1 
        className="font-display font-light text-athen-cream text-2xl uppercase mb-8"
        style={{ 
          letterSpacing: '0.3em',
          animation: 'fadeIn 0.4s ease-out 0.1s both'
        }}
      >
        ATHENAEUM
      </h1>
      
      {/* Progress Line Container */}
      <div 
        className="w-48 h-px relative overflow-hidden"
        style={{ backgroundColor: '#2A2A2A' }}
      >
        {/* Animated Progress Line */}
        <div 
          className="absolute inset-y-0 left-0 bg-athen-cream"
          style={{
            width: '30%',
            animation: 'progressLine 1.5s ease-in-out infinite'
          }}
        />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(8px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes progressLine {
          0% { left: -30%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
