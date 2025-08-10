import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung von KaffeeRad Berlin',
}

export default function DatenschutzPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
      <div className="prose max-w-none">
        <p>
          Stand: 20. Februar 2025
        </p>
        <p>
          Diese Seite ist ein Platzhalter. Bitte ersetzen Sie diesen Text durch die vollständige Datenschutzerklärung.
        </p>
      </div>
    </div>
  )
}

