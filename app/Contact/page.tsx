"use client"

import React, { useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  meetingDate: string
  meetingFrom: string
  meetingTo: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  meetingDate: '',
  meetingFrom: '',
  meetingTo: '',
  message: '',
}

const timeOptions = (() => {
  const options: string[] = []
  for (let totalMinutes = 8 * 60; totalMinutes <= 20 * 60; totalMinutes += 15) {
    const hours = String(Math.floor(totalMinutes / 60)).padStart(2, '0')
    const minutes = String(totalMinutes % 60).padStart(2, '0')
    options.push(`${hours}:${minutes}`)
  }
  return options
})()

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  )
  const [error, setError] = useState<string>('')

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target
    setForm((prev) => {
      const next = { ...prev, [name]: value }

      if (name === 'meetingFrom') {
        const fromMinutes = value ? toMinutes(value) : null
        const toMinutesValue = next.meetingTo ? toMinutes(next.meetingTo) : null
        const exceedsMax =
          fromMinutes !== null &&
          toMinutesValue !== null &&
          toMinutesValue - fromMinutes > 60
        const beforeStart =
          fromMinutes !== null &&
          toMinutesValue !== null &&
          toMinutesValue < fromMinutes

        if (exceedsMax || beforeStart) {
          next.meetingTo = ''
        }
      }

      if (name === 'meetingTo') {
        const fromMinutes = next.meetingFrom ? toMinutes(next.meetingFrom) : null
        const toMinutesValue = value ? toMinutes(value) : null
        const exceedsMax =
          fromMinutes !== null &&
          toMinutesValue !== null &&
          toMinutesValue - fromMinutes > 60
        const beforeStart =
          fromMinutes !== null &&
          toMinutesValue !== null &&
          toMinutesValue < fromMinutes

        if (exceedsMax || beforeStart) {
          next.meetingTo = ''
        }
      }

      return next
    })
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const meeting =
        form.meetingDate && form.meetingFrom && form.meetingTo
          ? `${form.meetingDate} ${form.meetingFrom} - ${form.meetingTo}`
          : ''
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, meeting }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}))
        throw new Error(payload?.error || 'Send failed')
      }

      setStatus('success')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Send failed')
    }
  }

  return (
    <section className="page-section">
      <div>
        <h1 className="page-title">
          Wir freuen uns auf Ihre Nachricht.
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Erzaehlen Sie uns kurz von Ihrem Vorhaben. Wir melden uns zeitnah.
        </p>
      </div>
      <form className="space-y-5" onSubmit={onSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-medium">Name</span>
            <input
              className="w-full rounded-md border border-neutral-200 bg-black px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500 dark:border-neutral-800"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={onChange}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="font-medium">E-Mail</span>
            <input
              className="w-full rounded-md border border-neutral-200 bg-black px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500 dark:border-neutral-800"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-medium">Telefon</span>
            <input
              className="w-full rounded-md border border-neutral-200 bg-black px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500 dark:border-neutral-800"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={onChange}
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="font-medium">Online-Termin (optional)</span>
            <div className="space-y-3">
              <input
                className="w-full rounded-md border border-neutral-200 bg-black px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500 dark:border-neutral-800"
                name="meetingDate"
                type="date"
                value={form.meetingDate}
                onChange={onChange}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <select
                  className="min-w-[140px] w-full rounded-md border border-neutral-200 bg-black px-4 py-2.5 text-base text-neutral-100 outline-none transition focus:border-neutral-500 dark:border-neutral-800"
                  name="meetingFrom"
                  value={form.meetingFrom}
                  onChange={onChange}
                >
                  <option value="">Von</option>
                  {timeOptions.map((time) => (
                    <option key={`from-${time}`} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <select
                  className="min-w-[140px] w-full rounded-md border border-neutral-200 bg-black px-4 py-2.5 text-base text-neutral-100 outline-none transition focus:border-neutral-500 dark:border-neutral-800"
                  name="meetingTo"
                  value={form.meetingTo}
                  onChange={onChange}
                  disabled={!form.meetingFrom}
                >
                  <option value="">Bis</option>
                  {timeOptions
                    .filter((time) => {
                      if (!form.meetingFrom) {
                        return false
                      }
                      const fromMinutes = toMinutes(form.meetingFrom)
                      const toMinutesValue = toMinutes(time)
                      return (
                        toMinutesValue >= fromMinutes &&
                        toMinutesValue - fromMinutes <= 60
                      )
                    })
                    .map((time) => (
                      <option key={`to-${time}`} value={time}>
                        {time}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </label>
        </div>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Nachricht</span>
          <textarea
            className="min-h-[140px] w-full rounded-md border border-neutral-200 bg-black px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-neutral-500 dark:border-neutral-800"
            name="message"
            required
            value={form.message}
            onChange={onChange}
          />
        </label>
        <div className="flex items-center gap-3">
          <button
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Senden...' : 'Nachricht senden'}
          </button>
          {status === 'success' ? (
            <span className="text-sm text-emerald-600">
              Danke! Wir melden uns bald.
            </span>
          ) : null}
          {status === 'error' ? (
            <span className="text-sm text-red-600">
              Fehler: {error || 'Bitte erneut versuchen.'}
            </span>
          ) : null}
        </div>
      </form>
    </section>
  )
}

export default Contact
