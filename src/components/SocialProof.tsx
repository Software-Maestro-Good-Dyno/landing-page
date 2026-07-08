import { MapPin, Video, Share2, Sparkles } from 'lucide-react';

const surveyItems = [
  {
    icon: <MapPin className="h-5 w-5" strokeWidth={1.8} />,
    title: '주로 가는 암장',
    description: '어떤 암장을 자주 방문하시나요?',
  },
  {
    icon: <Video className="h-5 w-5" strokeWidth={1.8} />,
    title: '영상 촬영 빈도',
    description: '클라이밍 영상을 얼마나 자주 찍으시나요?',
  },
  {
    icon: <Share2 className="h-5 w-5" strokeWidth={1.8} />,
    title: '현재 공유 플랫폼',
    description: '지금은 어디에 영상을 올리시나요?',
  },
  {
    icon: <Sparkles className="h-5 w-5" strokeWidth={1.8} />,
    title: '기대하는 AI 기능',
    description: '어떤 AI 기능이 가장 도움이 될까요?',
  },
];

export function SocialProof() {
  return (
    <section className="bg-surface/30 flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center px-6 py-16">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            지금 클라이머들의
            <br />
            영상 기록 습관을 확인하고 있어요
          </h2>
          <p className="text-muted mx-auto mt-5 max-w-lg text-base leading-relaxed">
            자주 가는 암장과 영상 업로드 방식을 알려주시면 초기 서비스 설계에
            반영할게요.
          </p>
        </div>

        {/* Survey card */}
        <div className="bg-card shadow-card overflow-hidden rounded-3xl">
          <div className="grid gap-3 p-6 md:grid-cols-2 md:p-8">
            {surveyItems.map((item, index) => (
              <div
                key={index}
                className="bg-surface/60 flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="text-accent shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-line border-t p-6 text-center md:p-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfhmF8J0a2n8Oo5UdUndkORE5u9cWKR8FGrW9S-01ks6hH_Pw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/85 inline-block rounded-full px-8 py-3.5 font-bold text-white transition-colors"
            >
              설문 참여하기
            </a>
            <p className="text-muted mt-3 text-sm">약 3분 정도 소요됩니다</p>
          </div>
        </div>
      </div>
    </section>
  );
}
