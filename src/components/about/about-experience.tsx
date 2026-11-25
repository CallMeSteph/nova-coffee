import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SoftText } from "@/components/ui/soft-text";
import { moments, type Moment } from "@/config/about";
import { cn } from "@/lib/utils";

type PlateProps = {
  moment: Moment;
  sizes: string;
  className?: string;
  frameClassName: string;
  captionClassName?: string;
  imageClassName?: string;
};

function Plate({
  moment,
  sizes,
  className,
  frameClassName,
  captionClassName,
  imageClassName,
}: PlateProps) {
  return (
    <Reveal className={className}>
      <figure>
        <div className={cn("grain relative overflow-hidden bg-linen", frameClassName)}>
          <Image
            src={moment.image}
            alt={moment.alt}
            fill
            placeholder="blur"
            sizes={sizes}
            className={cn("object-cover saturate-[.9]", imageClassName)}
          />
        </div>
        <figcaption
          className={cn(
            "mt-4 flex items-baseline justify-between gap-6 text-xs text-ink-muted",
            captionClassName,
          )}
        >
          <span className="eyebrow shrink-0 text-[0.6875rem] tabular-nums">
            {moment.figure}
          </span>
          <span className="font-display text-sm italic">{moment.caption}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

function Note({ moment, className }: { moment: Moment; className?: string }) {
  return (
    <Reveal delay={120} className={className}>
      <h3 className="text-display-md wrap-break-word"><SoftText>{moment.title}</SoftText></h3>
      <p className="mt-5 max-w-[24rem] text-base leading-relaxed text-ink-muted md:text-lg md:leading-relaxed">
        {moment.text}
      </p>
    </Reveal>
  );
}

/**
 * Three moments as a photo essay: a portrait, a small square and a wide
 * landscape, each with its note set in the open space beside it.
 */
export function AboutExperience() {
  return (
    <section aria-labelledby="experience-title" className="py-section">
      <Container className="grid grid-cols-12 sm:gap-x-[24px] lg:gap-x-[40px]">
        <Reveal className="col-span-12 lg:col-span-9 lg:col-start-4">
          <p className="eyebrow flex items-center gap-4 text-roast">
            <span aria-hidden="true" className="h-px w-10 bg-terracotta" />
            La experiencia NOVA
          </p>
          <h2 id="experience-title" className="mt-8 text-display-lg wrap-break-word lg:mt-10">
            Todo lo que cabe{" "}
            <em className="block text-roast [font-variation-settings:'SOFT'_100] sm:pl-[1.1em]">
              en una taza.
            </em>
          </h2>
        </Reveal>

        {/* Portrait, note at its foot */}
        <Plate
          moment={moments.pause}
          sizes="(min-width: 90rem) 68rem, (min-width: 64rem) 75vw, (min-width: 40rem) 113vw, 158vw"
          className="col-span-12 -ml-(--gutter) mr-[16%] mt-16 sm:mr-[40%] lg:col-span-5 lg:mx-0 lg:mt-28"
          frameClassName="aspect-[4/5]"
          captionClassName="pl-(--gutter) lg:pl-0"
          imageClassName="object-[47%_50%]"
        />
        <Note
          moment={moments.pause}
          className="col-span-12 mt-8 sm:col-span-8 lg:col-span-5 lg:col-start-7 lg:mt-0 lg:self-end lg:pb-9"
        />

        {/* Small square pushed right, note to its left */}
        <Plate
          moment={moments.detail}
          sizes="(min-width: 90rem) 42rem, (min-width: 64rem) 48vw, (min-width: 40rem) 75vw, 102vw"
          className="col-span-12 ml-[32%] mt-24 sm:ml-[50%] lg:order-2 lg:col-span-4 lg:col-start-9 lg:ml-0 lg:mt-32"
          frameClassName="aspect-square"
          imageClassName="object-[64%_50%]"
        />
        <Note
          moment={moments.detail}
          className="col-span-12 mt-8 sm:col-span-8 sm:col-start-5 lg:order-1 lg:col-span-4 lg:col-start-4 lg:mt-32 lg:self-center"
        />

        {/* Wide landscape, note beside its foot */}
        <Plate
          moment={moments.gathering}
          sizes="(min-width: 90rem) 62rem, (min-width: 64rem) 70vw, (min-width: 40rem) 100vw, 113vw"
          className="col-span-12 -mx-(--gutter) mt-24 lg:order-3 lg:col-span-8 lg:mx-0 lg:mt-32"
          frameClassName="aspect-[4/3] sm:aspect-[3/2]"
          captionClassName="px-(--gutter) lg:px-0"
        />
        <Note
          moment={moments.gathering}
          className="col-span-12 mt-8 sm:col-span-8 lg:order-4 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end lg:pb-9"
        />
      </Container>
    </section>
  );
}
