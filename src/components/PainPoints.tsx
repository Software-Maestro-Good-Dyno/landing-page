import { FolderOpen, Search, BarChart3 } from 'lucide-react';

const painPoints = [
  {
    icon: <FolderOpen className="h-7 w-7" strokeWidth={1.8} />,
    title: '영상은 찍지만\n다시 찾기 어렵다',
    description:
      '갤러리, 인스타 부계정, 스토리, 단톡방... 영상이 여기저기 흩어져 있어요.',
  },
  {
    icon: <Search className="h-7 w-7" strokeWidth={1.8} />,
    title: '같은 문제 풀이를\n검색할 수 없다',
    description:
      '어려운 루트를 공략할 때 참고할 영상을 찾으려면 인스타그램을 오래 뒤져야 해요.',
  },
  {
    icon: <BarChart3 className="h-7 w-7" strokeWidth={1.8} />,
    title: '내 성장을\n한눈에 볼 수 없다',
    description:
      '내 풀이 기록은 쌓이지만 암장, 섹터, 난이도 기준으로 다시 보기 어려워요.',
  },
];

export function PainPoints() {
  return (
    <section
      id="problems"
      className="bg-surface/30 flex min-h-[calc(100svh-4rem)] flex-col justify-center px-6 py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-5xl">
            아직도 인스타그램에
            <br />
            클라이밍 영상을 올리시나요?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-card shadow-card rounded-3xl p-8"
            >
              <div className="text-accent mb-6">{point.icon}</div>
              <h3 className="mb-3 text-xl font-semibold whitespace-pre-line leading-snug tracking-tight">
                {point.title}
              </h3>
              <p className="text-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
