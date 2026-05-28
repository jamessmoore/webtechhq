import NavBar from "./NavBar";

export default function SiteHeader() {
  return (
    <header className="flex flex-col items-center pt-10 gap-5 select-none">
      <div className="flex flex-col items-center gap-1">
        <span className="blade-label">ESTABLISHED 2009</span>
        <h1 className="blade-logo blade-logo-sm">
          <span className="blade-web">WEB</span>
          <span className="blade-tech">TECH</span>
          <span className="blade-hq">HQ</span>
        </h1>
        <span className="blade-label tracking-[0.5em]">webtechhq.com</span>
      </div>
      <NavBar />
    </header>
  );
}
