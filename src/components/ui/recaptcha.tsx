import React, { useState, useRef, useEffect, Suspense } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

// Lazy load reCAPTCHA to prevent blocking page load
const ReCAPTCHA = React.lazy(() => import('react-google-recaptcha'));

interface RecaptchaProps {
  onVerify: (token: string | null) => void;
  onError?: () => void;
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'compact' | 'normal';
  sitekey?: string;
}

export const Recaptcha = ({
  onVerify,
  onError,
  className = '',
  theme = 'light',
  size = 'normal',
  sitekey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // Test key
}: RecaptchaProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isExpired, setIsExpired] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleVerify = (token: string | null) => {
    setError(null);
    setIsExpired(false);
    onVerify(token);
  };

  const handleExpired = () => {
    setIsExpired(true);
    onVerify(null);
  };

  const handleError = () => {
    setError('Failed to load reCAPTCHA. Please check your internet connection and try again.');
    if (onError) {
      onError();
    }
  };

  const handleReset = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
      setError(null);
      setIsExpired(false);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
    setError(null);
  };

  useEffect(() => {
    // Cleanup function to reset state when component unmounts
    return () => {
      setError(null);
      setIsExpired(false);
      setIsLoaded(false);
    };
  }, []);

  const RecaptchaComponent = () => (
    <Suspense fallback={<div className="text-sm text-gray-500">Loading security verification...</div>}>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={sitekey}
        onChange={handleVerify}
        onExpired={handleExpired}
        onError={handleError}
        onLoad={handleLoad}
        theme={theme}
        size={size}
      />
    </Suspense>
  );

  // For development, automatically verify if no site key is configured
  useEffect(() => {
    if (!sitekey || sitekey === '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI') {
      // Auto-verify with test token for development
      setTimeout(() => {
        onVerify('test-token-for-development');
      }, 100);
    }
  }, [sitekey, onVerify]);

  if (!sitekey || sitekey === '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI') {
    return (
      <div className={`p-3 bg-blue-50 border border-blue-200 rounded-lg ${className}`}>
        <div className="flex items-center space-x-2 text-blue-800">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">
            Development mode: reCAPTCHA verification skipped. Configure VITE_RECAPTCHA_SITE_KEY for production.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="recaptcha-container">
        <RecaptchaComponent />
      </div>
      
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-red-800">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
            <button
              onClick={handleReset}
              className="text-red-600 hover:text-red-800 transition-colors"
              type="button"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      
      {isExpired && (
        <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-orange-800">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">reCAPTCHA has expired. Please verify again.</span>
            </div>
            <button
              onClick={handleReset}
              className="text-orange-600 hover:text-orange-800 transition-colors"
              type="button"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      
      <p className="text-xs text-gray-500">
        This site is protected by reCAPTCHA and the Google{' '}
        <a 
          href="https://policies.google.com/privacy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a 
          href="https://policies.google.com/terms" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Terms of Service
        </a>{' '}
        apply.
      </p>
    </div>
  );
};

export default Recaptcha;