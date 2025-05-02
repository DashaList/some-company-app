import { ContentTable } from '@/components/ContentTable';
import { LessImportantBlock } from '@/components/LessImportantBlock';
import { VideoBlock } from '@/components/VideoBlock';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Some Company',
  description: 'Some Company offers professional services with quality results.',
};

export default function Home() {
  return (
    <main>
      <VideoBlock />
      <ContentTable />
      <LessImportantBlock />
    </main>
  );
}
