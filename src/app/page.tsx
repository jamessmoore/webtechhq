export default function Home() {
  return (
    <div className="blade-bg flex flex-1 items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-6 select-none">
        <div className="blade-rule" />

        <div className="flex flex-col items-center gap-1">
          <span className="blade-label">ESTABLISHED 2024</span>
          <h1 className="blade-logo">
            <span className="blade-web">WEB</span>
            <span className="blade-tech">TECH</span>
            <span className="blade-hq">HQ</span>
          </h1>
          <span className="blade-label tracking-[0.5em]">webtechhq.com</span>
        </div>

        <div className="blade-rule" />
      </div>
    </div>
  );
}
