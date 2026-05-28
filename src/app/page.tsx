export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-start gap-8 px-8 pt-6 pb-24">
      <div className="flex flex-col gap-6 max-w-xl">
        <p className="blade-body-text" style={{ color: "#fff" }}>
          If your infrastructure is held together with duct tape and hope,
          you&apos;re in the right place. I&apos;m James Moore — a Senior SRE
          and DevOps engineer with 15+ years of experience building, scaling,
          and automating cloud infrastructure for companies ranging from startups
          to Fortune 500s. I help forward-thinking businesses get their
          technology working <em>for</em> them instead of against them.
        </p>
        <p className="blade-body-text" style={{ color: "#fff" }}>
          I offer four core services:{" "}
          <strong>Infrastructure Auditing</strong> to surface the risks and
          inefficiencies hiding in your cloud environment,{" "}
          <strong>Automation</strong>{" "}to eliminate the repetitive manual work
          draining your team&apos;s time and energy,{" "}
          <strong>Augmentation</strong> to extend your existing engineering
          capacity without the overhead of a full-time hire, and{" "}
          <strong>AI Consulting</strong> to help you cut through the hype and
          integrate AI in ways that actually move the needle for your business.
        </p>
        <p className="blade-body-text" style={{ color: "#fff" }}>
          Whether you&apos;re a founder who needs a trusted technical partner or
          an engineering team that needs senior-level firepower on demand, I
          work remotely, I move fast, and I build things that last. Take a look
          around — and if something resonates, let&apos;s talk.
        </p>
      </div>
    </main>
  );
}
