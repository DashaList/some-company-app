import { ContentTable } from '@/components/ContentTable';
import { LessImportantBlock } from '@/components/LessImportantBlock';
import { VideoBlock } from '@/components/VideoBlock';

export default function Home() {
  return (
    <div>
      <VideoBlock />
      <ContentTable />
      <LessImportantBlock />
    </div>
  );
}
