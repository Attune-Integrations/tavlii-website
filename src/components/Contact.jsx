import { useState } from 'react'
import { CheckIcon, ArrowIcon } from './icons.jsx'

export const PRODUCT_OPTIONS = [
  'tavlii Counter',
  'tavlii Counter+',
  'tavlii Table',
  'tavlii Table Pro (Coming Soon)',
  'Not sure yet',
]

const TRUST_POINTS = [
  'A guided walkthrough tailored to your business type',
  'Straight answers on hardware and pricing',
  'No pressure, no obligation',
]

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contact({ selectedProduct, onProductChange }) {
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const formData = new FormData(form)
    const firstName = formData.get('name').split(' ')[0]

    setSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        setStatus(`Thanks, ${firstName} — our team will reach out within one business day.`)
        form.reset()
        onProductChange('')
      } else {
        setStatus('Something went wrong — please try again or email us directly.')
      }
    } catch {
      setStatus('Something went wrong — please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--color-bg-alt)] py-24 lg:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow text-[var(--color-primary)]">Get Started</span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to upgrade your checkout experience?
            </h2>
            <p className="mt-5 max-w-md text-lg text-[var(--color-overlay)]/60">
              Book a personalized demo and see tavlii POS running with your menu, your floor plan, and your business in mind.
            </p>

            <ul className="mt-10 space-y-4 text-sm text-[var(--color-overlay)]/70">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="icon-tile h-9 w-9">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New demo request from tavlii website" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required className="field-input" placeholder="Jane Perera" />
                </div>
                <div>
                  <label htmlFor="business" className="field-label">Business Name</label>
                  <input id="business" name="business" type="text" autoComplete="organization" required className="field-input" placeholder="Perera Retail Co." />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="field-label">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="field-input" placeholder="jane@business.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="field-label">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required className="field-input" placeholder="+94 77 123 4567" />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="field-label">Product Interest</label>
                <select
                  id="product"
                  name="product"
                  required
                  className="field-input appearance-none"
                  value={selectedProduct}
                  onChange={(e) => onProductChange(e.target.value)}
                >
                  <option value="" disabled>Select a product</option>
                  {PRODUCT_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <button type="submit" disabled={submitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
                {submitting ? 'Sending…' : 'Submit Inquiry'}
                <ArrowIcon />
              </button>

              {status && (
                <p className="text-center text-sm font-medium text-[var(--color-primary)]" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
