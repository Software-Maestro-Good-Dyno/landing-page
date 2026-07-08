import { Upload, Tag, Play } from 'lucide-react';

const steps = [
  {
    step: '1',
    icon: <Upload className="h-6 w-6" strokeWidth={1.8} />,
    title: '영상을 올린다',
    description:
      '클라이밍 영상을 업로드하세요. Limbing에서 빠르고 쉽게 편집할 수 있어요.',
  },
  {
    step: '2',
    icon: <Tag className="h-6 w-6" strokeWidth={1.8} />,
    title: '암장·섹터·난이도를 태깅한다',
    description: '어느 암장의 어느 섹터, 어떤 난이도인지 태그를 달아요.',
  },
  {
    step: '3',
    icon: <Play className="h-6 w-6" strokeWidth={1.8} />,
    title: '내 영상을 한곳에서 모아본다',
    description: '내 풀이 영상을 보관하고, 다른 사람들과 공유할 수 있어요.',
  },
];

export function CoreFlow() {
  return (
    <section
      id="how-it-works"
      className="flex min-h-[calc(100svh-4rem)] flex-col justify-center px-6 py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            단 3단계로 시작하세요
          </h2>
        </div>

        {/* Steps list */}
        <div className="mx-auto max-w-3xl">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-6 py-7 ${
                index < steps.length - 1 ? 'border-line border-b' : ''
              }`}
            >
              {/* Step number */}
              <span className="bg-accent/12 text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-semibold">
                {item.step}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-1.5 text-xl font-semibold tracking-tight md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>

              <div className="text-muted hidden pt-1 sm:block">{item.icon}</div>
            </div>
          ))}
        </div>

        {/* Tag preview — 태그 색은 서비스 개념(난이도색·홀드색)이라 유지 */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {[
            { label: '더클라임 강남', style: 'bg-accent-yellow/15 text-accent-yellow font-semibold' },
            { label: '4섹터', style: 'bg-accent-blue/15 text-accent-blue font-semibold' },
            { label: '초록', style: 'bg-accent-lime/15 text-accent-lime font-semibold' },
            { label: '완등', style: 'bg-accent/15 text-accent font-semibold' },
            { label: '#오버행', style: 'bg-surface text-muted' },
            { label: '#크림프', style: 'bg-surface text-muted' },
          ].map((tag, i) => (
            <span
              key={i}
              className={`rounded-full px-4 py-2 text-sm ${tag.style}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
