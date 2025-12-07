import IconSpyWitch from '@/components/icons/spywitch';
import PageArea from '@/components/layout/page-area';
import { SYS_PAGES } from '@/system/pages';
import Link from 'next/link';

export default function Page() {
  return (
    <PageArea>
      <div className="flex flex-col items-center gap-s-gap pb-s-gap text-center text-sm text-c-secondary-text">
        <IconSpyWitch className="size-24 shrink-0 grayscale" />
        <h1 className="text-xl">SpyWitch</h1>
        <h2>An open-source live data tracker for Twitch.tv</h2>
        <p className="max-w-lg text-balance">
          SpyWitch allows you to track chat events, such as messages, subs, cheers, etc., in any channel on the
          platform.
        </p>
        <Link
          href={SYS_PAGES.setup.path}
          className="mt-s-gap rounded-sm bg-c-accent px-3 py-1.5 font-medium text-c-fg hover:bg-c-accent/90"
        >
          Get Started
        </Link>
      </div>
    </PageArea>
  );
}
