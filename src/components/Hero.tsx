import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden px-6 pt-16 pb-16">
      {/* Background glow */}
      <div className="bg-accent/5 pointer-events-none absolute top-1/3 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Text */}
        <div className="flex-1 pt-4 text-center lg:text-left">
          <div className="border-accent/30 bg-accent/10 text-accent mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold">
            <span className="relative flex h-2 w-2">
              <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-accent relative inline-flex h-2 w-2 rounded-full" />
            </span>
            베타 테스터 모집중
          </div>

          <h1 className="mb-6 max-w-xl text-5xl leading-[1.05] font-black tracking-tight text-balance md:text-6xl lg:text-7xl">
            <span className="text-accent">클라이밍 영상</span>을
            <br />
            한곳에
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-md text-lg leading-relaxed text-pretty lg:mx-0">
            암장·섹터·난이도 기준으로 영상을 태깅하고, 같은 문제 풀이를 한눈에
            확인하세요.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#early-access"
              className="bg-accent hover:bg-accent/85 flex h-14 w-full items-center justify-center gap-2 rounded-full px-8 text-base font-bold text-white transition-colors sm:w-auto"
            >
              사전 신청하기
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#problems"
              className="text-muted hover:text-ink flex items-center gap-2 text-base font-medium transition-colors"
            >
              서비스 컨셉 보기
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Phone Mockup — 실제 iOS 앱 홈 탭 스크린샷 (iPhone 17 시뮬레이터 캡처) */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="border-line relative h-150 w-69 overflow-hidden rounded-[44px] border-[6px] bg-black shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
            <img
              src={theme === 'dark' ? '/app-home-dark.jpg' : '/app-home.jpg'}
              alt="limbing 앱 홈 화면 — 클라이밍 영상 피드"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
