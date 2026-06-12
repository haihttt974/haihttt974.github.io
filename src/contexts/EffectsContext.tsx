import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type EffectType = 'none' | 'christmas' | 'tet' | 'parallax';

interface EffectsContextType {
  currentEffect: EffectType;
  setCurrentEffect: (effect: EffectType) => void;
}

const EffectsContext = createContext<EffectsContextType | undefined>(undefined);

export const EffectsProvider = ({ children }: { children: ReactNode }) => {
  const [currentEffect, setCurrentEffect] = useState<EffectType>(() => {
    const savedEffect = localStorage.getItem('haiit-preferred-effect') as EffectType | null;
    return savedEffect && ['none', 'christmas', 'tet', 'parallax'].includes(savedEffect)
      ? savedEffect
      : 'none';
  });

  useEffect(() => {
    localStorage.setItem('haiit-preferred-effect', currentEffect);
  }, [currentEffect]);

  return (
    <EffectsContext.Provider value={{ currentEffect, setCurrentEffect }}>
      {children}
    </EffectsContext.Provider>
  );
};

export const useEffects = () => {
  const context = useContext(EffectsContext);
  if (!context) {
    throw new Error('useEffects must be used within an EffectsProvider');
  }
  return context;
};
