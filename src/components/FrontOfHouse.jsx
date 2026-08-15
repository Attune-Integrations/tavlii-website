import bitzifyLogo from '../assets/BITZIFY.png'
import PosPreview from './PosPreview.jsx'
import KitchenPreview from './KitchenPreview.jsx'

export default function FrontOfHouse() {
  return (
    <section id="software" className="relative overflow-hidden bg-[var(--color-bg-alt)] text-[var(--color-text)]">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-18">
        <div className="mt-20 lg:mt-28 mb-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-[var(--color-primary)]">Front-of-House Software</span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Take orders at the speed of service
            </h2>
            <p className="mt-5 text-lg text-[var(--color-overlay)]/60">
              An interface fast enough for your busiest rush, and simple enough for a first-day hire to master in minutes.
            </p>
          </div>
        </div>

        <PosPreview />

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className=" text-[var(--color-primary)]">tavlii Kitchen</span>
            <h3 className="mt-4 text-balance font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Every order, synced live to the kitchen
            </h3>
            <p className="mt-4 text-[var(--color-overlay)]/60">
              A dedicated kitchen display board moves tickets from New to Preparing to Ready to Serve — no dockets, no shouting across the pass.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-6xl">
            <KitchenPreview />
          </div>
        </div>

        <div className="mt-18 flex items-center justify-center gap-2 text-sm text-[var(--color-overlay)]/50">
          <span>Powered by</span>
          <img src={bitzifyLogo} alt="Bitzify" className="h-25 w-auto pl-6" />
        </div>
      </div>
    </section>
  )
}
