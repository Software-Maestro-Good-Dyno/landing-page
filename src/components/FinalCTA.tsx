import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setHasError(false);
    try {
      const res = await fetch('https://formspree.io/f/mlgveqkl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        window.gtag?.('event', 'sign_up_success', {
          event_category: 'engagement',
          event_label: 'Limbing 사전예약 알림신청',
        });
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="early-access"
      className="flex min-h-[calc(100svh-4rem)] flex-col justify-center px-6 py-16"
    >
      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="bg-card shadow-card relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="relative">
            {/* Logo */}
            <div className="mb-8 flex items-center justify-center">
              <span className="text-accent text-2xl font-black tracking-wide">
                LIMBING
              </span>
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              출시되면 가장 먼저
              <br />
              알려드릴게요
            </h2>
            <p className="text-muted mb-8 text-lg leading-relaxed">
              이메일을 남겨주시면 Limbing 출시 소식을
              <br />
              가장 먼저 받아보실 수 있어요.
            </p>

            {isSubmitted ? (
              <div className="bg-accent/10 inline-flex items-center gap-3 rounded-2xl px-8 py-6">
                <CheckCircle className="text-accent h-8 w-8" />
                <div className="text-left">
                  <p className="font-bold">신청이 완료되었어요!</p>
                  <p className="text-muted text-sm">
                    출시되면 가장 먼저 연락드릴게요.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                <div className="bg-surface/60 flex flex-col gap-3 rounded-2xl p-2 sm:flex-row sm:items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="이메일 주소를 입력하세요"
                    className="text-ink placeholder:text-muted bg-bg focus:ring-accent/30 flex-1 rounded-xl px-4 py-3 text-base transition-shadow outline-none focus:ring-2 disabled:opacity-50"
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-accent hover:bg-accent/85 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition-colors disabled:opacity-60"
                  >
                    {isLoading ? '신청 중...' : '사전 신청'}
                    {!isLoading && <ArrowRight className="h-4 w-4" />}
                  </button>
                </div>
                {hasError && (
                  <p className="mt-3 text-sm text-red-400">
                    신청 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.
                  </p>
                )}
                {!hasError && (
                  <p className="text-muted mt-4 text-sm">
                    스팸 없이 출시 소식만 보내드려요.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-muted border-line mt-12 border-t pt-8 text-sm">
          <p>Made with care by Good Dyno Team</p>
          <a
            href="mailto:gooddynoteam@gmail.com"
            className="hover:text-ink mt-2 inline-block transition-colors"
          >
            gooddynoteam@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
