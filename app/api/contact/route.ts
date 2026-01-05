import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  meeting?: string
  message?: string
}

const buildEmailText = (payload: ContactPayload) => {
  const lines = [
    `Name: ${payload.name || '-'}`,
    `Email: ${payload.email || '-'}`,
    `Phone: ${payload.phone || '-'}`,
    `Meeting: ${payload.meeting || '-'}`,
    '',
    payload.message || '',
  ]

  return lines.join('\n')
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON payload.' },
      { status: 400 }
    )
  }

  try {
    const name = payload.name?.trim()
    const email = payload.email?.trim()
    const message = payload.message?.trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    const user = process.env.GMAIL_USER
    const pass = process.env.GMAIL_APP_PASSWORD
    const to = process.env.CONTACT_TO_EMAIL || user

    if (!user || !pass || !to) {
      return NextResponse.json(
        { error: 'Email not configured.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    })

    await transporter.sendMail({
      from: user,
      to,
      subject: `New contact form submission from ${name}`,
      text: buildEmailText(payload),
      replyTo: email,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    const details =
      process.env.NODE_ENV === 'development'
        ? {
            message: error instanceof Error ? error.message : String(error),
          }
        : undefined

    return NextResponse.json(
      { error: 'Email send failed.', ...(details || {}) },
      { status: 502 }
    )
  }
}
