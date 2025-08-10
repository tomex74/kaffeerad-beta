import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Kaffeerad.berlin',
}

export default function ImpressumPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      <div className="prose max-w-none">
        <p>
          Kaffeerad.berlin<br />
          Steffanie Arroyo Carvalho Gastronomie<br />
          Schliemannstraße 19<br />
          10437 Berlin
        </p>
        <p>
          E-Mail: <a href="mailto:hallo@kaffeerad.berlin">hallo@kaffeerad.berlin</a>
        </p>
      </div>
    </div>
  )
}

