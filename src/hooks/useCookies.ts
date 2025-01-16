import { useCallback } from 'react';

// Define the shape of cookie options
interface CookieOptions {
  days?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

// Helper function to get a cookie by name
const getCookie = (name: string): string | null => {
  const nameEQ = `${encodeURIComponent(name)}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
};

// Helper function to set a cookie
const setCookie = (name: string, value: string, options: CookieOptions = {}) => {
  let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (options.days) {
    const date = new Date();
    date.setTime(date.getTime() + options.days * 24 * 60 * 60 * 1000);
    cookieStr += `; expires=${date.toUTCString()}`;
  }

  if (options.path) {
    cookieStr += `; path=${options.path}`;
  } else {
    cookieStr += `; path=/`;
  }

  if (options.domain) {
    cookieStr += `; domain=${options.domain}`;
  }

  if (options.secure) {
    cookieStr += `; secure`;
  }

  if (options.sameSite) {
    cookieStr += `; samesite=${options.sameSite}`;
  }

  document.cookie = cookieStr;
};

// Helper function to remove a cookie
const removeCookie = (name: string, options: CookieOptions = {}) => {
  setCookie(name, '', { ...options, days: -1 });
};

// React hook for cookie handling
export const useCookies = () => {
  const get = useCallback((name: string): string | null => {
    return getCookie(name);
  }, []);

  const set = useCallback((name: string, value: string, options?: CookieOptions) => {
    setCookie(name, value, options);
  }, []);

  const remove = useCallback((name: string, options?: CookieOptions) => {
    removeCookie(name, options);
  }, []);

  return { get, set, remove };
};
