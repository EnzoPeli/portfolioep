/**
 * Fixed radial glow, same 600px scale and falloff as the cursor-following
 * HeroSpotlight, with a slow breathing pulse — pure CSS, no JS. Centered via
 * inset-0 + margin:auto (not a translate transform) so the pulse keyframe's
 * `transform: scale(...)` doesn't clobber a centering transform.
 */
export function AmbientGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`glow-pulse pointer-events-none absolute inset-0 m-auto h-[600px] w-[600px] ${className}`}
      style={{
        background:
          "radial-gradient(circle at center, color-mix(in srgb, var(--color-mint) 18%, transparent), transparent 60%)",
      }}
    />
  );
}
