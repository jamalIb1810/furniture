import createMiddleware from 'next-intl/middleware';
import { isMobileDevice } from './app/[locale]/utils/isMobile';

// Create the next-intl middleware
const intlMiddleware = createMiddleware({
    locales: ['en', 'ar', 'es'],
    defaultLocale: 'en',
    // localeDetection: false,
    // localePrefix: 'as-needed',
});

// Enhance the middleware to include security headers
export default function middleware(req) {
    const userAgent = req.headers.get('user-agent');
    const isMobile = isMobileDevice(userAgent);
    const res = intlMiddleware(req);

    res.headers.set('X-Frame-Options', 'SAMEORIGIN');
    res.headers.set('Content-Security-Policy', "frame-ancestors 'self'");
    res.headers.set('x-is-mobile', isMobile ? 'true' : 'false');

    return res;
}

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/([\\w-]+)?/users/(.+)'],
};
