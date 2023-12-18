import '@/styles/globals.css';
import NunitoFonts from '@/fonts';
import type { Metadata } from 'next';
import { ChakraUIProviders } from '@/libs/chakra-ui/providers';
import GoogleAnalytics from '@/components/analytics/google-analytics';

export const metadata: Metadata = {
  title: 'Hedro-ai',
  description:
    'A helpful GPT-3.5-turbo-assistant whose main goal is to guide users to explore the ecosystem of the Hedera network',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${NunitoFonts.className}`}>
      <body className='font-nunito'>
        <ChakraUIProviders>
          <div className='main'>
            <div className='background-gradient' />
          </div>
          <GoogleAnalytics />
          <main className='app'>{children}</main>
        </ChakraUIProviders>
      </body>
    </html>
  );
}
