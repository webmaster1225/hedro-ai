import '@/styles/globals.css';
import type { Metadata } from 'next';
import StyreneAWebFont from '@/fonts';
import { ChakraUIProviders } from '@/libs/chakra-ui/providers';

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
    <html lang='en' className={`${StyreneAWebFont.variable}`}>
      <body className='font-styrene'>
        <ChakraUIProviders>{children}</ChakraUIProviders>
      </body>
    </html>
  );
}
