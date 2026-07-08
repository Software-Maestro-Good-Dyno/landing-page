import {
  PlayCircle,
  User,
  SlidersHorizontal,
  FlagTriangleRight,
} from 'lucide-react';

const features = [
  {
    icon: <User className="h-7 w-7" strokeWidth={1.8} />,
    title: '영상 아카이브',
    description: '내 클라이밍 기록을 언제든 꺼내볼 수 있어요.',
    colSpan: 'md:col-span-1',
  },
  {
    icon: <SlidersHorizontal className="h-7 w-7" strokeWidth={1.8} />,
    title: '암장·섹터·난이도 필터',
    description:
      '암장·섹터·난이도를 선택해 원하는 영상을 빠르게 찾을 수 있어요.',
    colSpan: 'md:col-span-2',
  },
  {
    icon: <PlayCircle className="h-7 w-7" strokeWidth={1.8} />,
    title: '영상 피드',
    description:
      '인기 영상부터 독창적인 풀이까지, 다양한 클라이머들과 영상으로 소통해요.',
    colSpan: 'md:col-span-2',
  },
  {
    icon: <FlagTriangleRight className="h-7 w-7" strokeWidth={1.8} />,
    title: '크루와 함께',
    description: '같이 운동하는 크루원들과 일상을 공유해요.',
    colSpan: 'md:col-span-1',
  },
];

export function FeaturePreview() {
  return (
    <section
      id="features"
      className="bg-surface/30 flex min-h-[calc(100svh-4rem)] flex-col justify-center px-6 py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            이런 기능이
            <br />
            준비되어 있어요
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-card shadow-card rounded-3xl p-8 ${f.colSpan}`}
            >
              <div className="text-accent mb-6">{f.icon}</div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="text-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
