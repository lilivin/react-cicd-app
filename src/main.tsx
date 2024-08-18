import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createInstance } from '@featurevisor/sdk';
import { FeaturevisorProvider } from '@featurevisor/react';

const envName = import.meta.env.VITE_ENVIRONMENT || 'preview';
const featurevisor = createInstance({
  datafileUrl: `https://djidaxi827vic.cloudfront.net/datafiles/${envName}/datafile-tag-all.json`
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FeaturevisorProvider instance={featurevisor}>
      <App />
    </FeaturevisorProvider>
  </StrictMode>,
)
