import { useTheme } from '../context/ThemeContext';

export function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-bg/80 border-line fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <button
          onClick={() =>
            document
              .querySelector('main')
              ?.scrollTo({ top: 0, behavior: 'smooth' })
          }
          className="flex items-center gap-2.5"
        >
          <span className="text-accent text-xl font-black">ClimPick</span>
        </button>

        <div className="text-muted hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#problems" className="hover:text-ink transition-colors">
            문제점
          </a>
          <a href="#how-it-works" className="hover:text-ink transition-colors">
            이용방법
          </a>
          <a href="#features" className="hover:text-ink transition-colors">
            기능
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={
              theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'
            }
            className="border-line text-muted hover:text-ink hover:bg-surface flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
          >
            {theme === 'dark' ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a
            href="#early-access"
            className="bg-accent hover:bg-accent/85 rounded-full px-5 py-2 text-sm font-bold text-white transition-colors"
          >
            사전 신청
          </a>
        </div>
      </div>
    </nav>
  );
}
