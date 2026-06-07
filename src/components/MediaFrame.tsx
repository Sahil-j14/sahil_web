import type { MediaItem } from "../lib/content";

type Props = {
  media: MediaItem;
  className?: string;
};

export default function MediaFrame({ media, className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {media.type === "video" ? (
        <video
          className="block h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={media.poster}
        >
          <source src={media.src} type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media.src}
          alt={media.title}
          loading="lazy"
          className="block h-full w-full object-cover"
        />
      )}
    </div>
  );
}
