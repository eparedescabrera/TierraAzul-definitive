import { useTranslation } from 'react-i18next';
import { FaYoutube } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { youtubeVideos } from '../data/siteData';

export default function YouTubeSection() {
  const { t } = useTranslation();

  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <SectionHeader
          eyebrow={t('home.video.eyebrow')}
          eyebrowClassName="text-youtube"
          eyebrowHref={youtubeVideos.channelUrl}
          EyebrowIcon={FaYoutube}
          title={t('home.video.title')}
          text={t('home.video.text')}
        />

        <article
          className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[1.5rem] border border-forest/10 bg-ocean shadow-card sm:mt-12 sm:rounded-[2rem]"
          data-aos="fade-up"
        >
          <div className="relative aspect-video w-full">
            <iframe
              title={t('home.video.title')}
              src={`https://www.youtube.com/embed/${youtubeVideos.videoId}?rel=0&modestbranding=1`}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </article>

        <div className="mt-10 text-center" data-aos="fade-up">
          <a
            href={youtubeVideos.channelUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-2 border-youtube px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-youtube transition hover:bg-youtube hover:text-white"
          >
            <FaYoutube className="text-lg" />
            {t('home.video.channel')}
          </a>
        </div>
      </div>
    </section>
  );
}
