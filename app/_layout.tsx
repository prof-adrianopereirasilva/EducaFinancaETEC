import React, { useEffect, useState } from 'react';
import { Slot } from 'expo-router';
import { motion, AnimatePresence } from 'framer-motion';

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              background: '#1976d2',
              color: '#fff',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 9999,
            }}
          >
            <h1>EducaFinança ETEC</h1>
            <p>Carregando...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && <Slot />}
    </>
  );
}
