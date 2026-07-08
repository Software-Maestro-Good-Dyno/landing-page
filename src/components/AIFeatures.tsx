const features = [
  {
    emoji: '✂️',
    title: 'AI 컷편집',
    description:
      '긴 영상에서 핵심 순간만 빠르게 편집하여 바로 공유 가능한 클립이 완성돼요.',
    status: 'Beta' as const,
    tags: ['핵심 구간 추출', '배속', '자동 클립'],
  },
  {
    emoji: '🪄',
    title: '클라이머 캐릭터화',
    description: '내 동작을 AI가 분석해 나만의 클라이머 캐릭터로 만들어드려요.',
    status: 'Beta' as const,
    tags: ['클라이머 인식', '캐릭터 생성', '나만의 캐릭터'],
  },
  {
    emoji: '💡',
    title: '문제 풀이 추천',
    description: '창의적인 풀이 영상을 추천해요.',
    status: 'Coming' as const,
    tags: ['베타 탐색', '창의적 베타', '맞춤 추천'],
  },

  {
    emoji: '🧗',
    title: '자세 분석 피드백',
    description:
      'AI가 동작을 분석해 자세와 무게중심에 대한 피드백을 제공합니다.',
    status: 'Coming' as const,
    tags: ['무브 분석', '무게중심 분석'],
  },
];

const statusBadge = {
  Beta: 'bg-accent/12 text-accent',
  Coming: 'bg-surface text-muted',
};

export function AIFeatures() {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-center px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-accent mb-3 text-base font-semibold">AI 기능</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            영상 하나로,
            <br />
            AI와 함께 성장해요
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((f, i) => (
            <div key={i} className="bg-card shadow-card flex flex-col rounded-3xl p-8">
              {/* Top row: emoji + status */}
              <div className="mb-5 flex items-start justify-between">
                <span className="text-3xl">{f.emoji}</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBadge[f.status]}`}
                >
                  {f.status}
                </span>
              </div>

              {/* Title & description */}
              <h3 className="mb-2 text-lg font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="text-muted mb-5 flex-1 text-sm leading-relaxed">
                {f.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {f.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-surface text-muted rounded-full px-2.5 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-muted mt-10 text-center text-sm">
          Beta 기능은 출시 후 바로 사용 가능 · Coming 기능은 순차 도입 예정
        </p>
      </div>
    </section>
  );
}
