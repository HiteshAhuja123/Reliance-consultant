export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
          <span className="text-xl font-extrabold text-accent">RC</span>
        </div>
        <div className="w-40 h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full animate-[loader_1.2s_ease-in-out_infinite]"
            style={{ width: "40%" }}
          />
        </div>
        <p className="text-sm text-foreground/40 font-medium tracking-wide">Loading…</p>
      </div>

      <style>{`
        @keyframes loader {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
      `}</style>
    </div>
  );
}
