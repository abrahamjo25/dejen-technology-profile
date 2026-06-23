export default function Background() {
  return (
    <>
      <div className="aurora-bg" aria-hidden>
        <div
          className="orb"
          style={{ width: 520, height: 520, background: "var(--orb-1)", top: -160, left: -120 }}
        />
        <div
          className="orb"
          style={{ width: 460, height: 460, background: "var(--orb-2)", top: 240, right: -160 }}
        />
        <div
          className="orb"
          style={{ width: 600, height: 600, background: "var(--orb-3)", bottom: -260, left: "30%" }}
        />
      </div>
      <div className="grid-overlay" aria-hidden />
    </>
  );
}
