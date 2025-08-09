'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  eventType: string
  eventDate: string
  guestCount: string
  budget: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const eventTypes = [
  'Firmenveranstaltung',
  'Hochzeit',
  'Geburtstag',
  'Workshop',
  'Konferenz',
  'Privatfeier',
  'Sonstiges'
]

const budgetRanges = [
  'Unter €500',
  '€500 - €1.000',
  '€1.000 - €2.500',
  '€2.500 - €5.000',
  'Über €5.000'
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-Mail-Format ist ungültig'
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Bitte wählen Sie einen Event-Typ'
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Event-Datum ist erforderlich'
    } else {
      const selectedDate = new Date(formData.eventDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        newErrors.eventDate = 'Event-Datum muss in der Zukunft liegen'
      }
    }

    if (!formData.guestCount.trim()) {
      newErrors.guestCount = 'Gästeanzahl ist erforderlich'
    } else if (isNaN(Number(formData.guestCount)) || Number(formData.guestCount) < 1) {
      newErrors.guestCount = 'Bitte geben Sie eine gültige Gästeanzahl ein'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would normally send the data to your API/n8n webhook
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          budget: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Es gab einen Fehler beim Senden des Formulars. Bitte versuchen Sie es später erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-neutral-600 mb-6">
          Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn btn-secondary px-4 py-2"
        >
          Neue Anfrage senden
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`input ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Ihr vollständiger Name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`input ${errors.email ? 'border-red-500' : ''}`}
            placeholder="ihre.email@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      {/* Phone and Company */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
            Telefon (optional)
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="input"
            placeholder="+49 (30) 123 456 7"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-2">
            Firma (optional)
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleInputChange}
            className="input"
            placeholder="Firmenname"
          />
        </div>
      </div>

      {/* Event Type and Date */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-neutral-900 mb-2">
            Event-Art *
          </label>
          <select
            name="eventType"
            id="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
            className={`input ${errors.eventType ? 'border-red-500' : ''}`}
          >
            <option value="">Bitte wählen</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.eventType && <p className="mt-1 text-sm text-red-600">{errors.eventType}</p>}
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-neutral-900 mb-2">
            Event-Datum *
          </label>
          <input
            type="date"
            name="eventDate"
            id="eventDate"
            value={formData.eventDate}
            onChange={handleInputChange}
            className={`input ${errors.eventDate ? 'border-red-500' : ''}`}
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.eventDate && <p className="mt-1 text-sm text-red-600">{errors.eventDate}</p>}
        </div>
      </div>

      {/* Guest Count and Budget */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium text-neutral-900 mb-2">
            Gästeanzahl *
          </label>
          <input
            type="number"
            name="guestCount"
            id="guestCount"
            value={formData.guestCount}
            onChange={handleInputChange}
            className={`input ${errors.guestCount ? 'border-red-500' : ''}`}
            placeholder="z.B. 25"
            min="1"
          />
          {errors.guestCount && <p className="mt-1 text-sm text-red-600">{errors.guestCount}</p>}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-neutral-900 mb-2">
            Budget (optional)
          </label>
          <select
            name="budget"
            id="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="input"
          >
            <option value="">Bitte wählen</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
          Nachricht (optional)
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="input resize-none"
          placeholder="Teilen Sie uns weitere Details zu Ihrem Event mit..."
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full sm:w-auto px-8 py-3 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
        </button>
      </div>

      {/* Privacy Notice */}
      <div className="text-xs text-neutral-500">
        <p>
          Mit dem Absenden stimmen Sie zu, dass Ihre Daten zur Bearbeitung Ihrer Anfrage verwendet werden. 
          Weitere Informationen finden Sie in unserer{' '}
          <a href="/datenschutz" className="text-primary-600 hover:text-primary-700 underline">
            Datenschutzerklärung
          </a>.
        </p>
      </div>
    </form>
  )
}