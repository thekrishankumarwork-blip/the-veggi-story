'use client'

import { useEffect, useRef, useState } from 'react'
import { Download, Printer } from 'lucide-react'

declare global {
  interface Window {
    QRCode: any
  }
}

export function TablesQRGenerator() {
  const [qrCodesGenerated, setQrCodesGenerated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return

    // Load QR Code library from CDN
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
    script.async = true
    script.onload = () => {
      scriptLoaded.current = true
      setQrCodesGenerated(true)
      setTimeout(generateQRCodes, 100)
    }
    document.head.appendChild(script)
  }, [])

  const generateQRCodes = () => {
    if (!containerRef.current || !window.QRCode) return

    const container = containerRef.current
    container.innerHTML = '' // Clear previous QR codes

    for (let tableNum = 1; tableNum <= 20; tableNum++) {
      const tableUrl = `${window.location.origin}/?table=${tableNum}`

      const qrContainer = document.createElement('div')
      qrContainer.className =
        'flex flex-col items-center justify-center p-6 border-2 border-[#d4af37] rounded-lg bg-white'
      qrContainer.style.pageBreakInside = 'avoid'

      const tableLabel = document.createElement('p')
      tableLabel.className = 'text-[#1a5f3f] font-semibold text-lg mb-4'
      tableLabel.textContent = `Table ${tableNum}`

      const qrDiv = document.createElement('div')
      qrDiv.id = `qr-table-${tableNum}`
      qrDiv.className = 'mb-4'

      const restaurantName = document.createElement('p')
      restaurantName.className = 'text-[#1a5f3f] text-xs text-center font-semibold'
      restaurantName.textContent = 'The Veggie Story'

      qrContainer.appendChild(tableLabel)
      qrContainer.appendChild(qrDiv)
      qrContainer.appendChild(restaurantName)

      container.appendChild(qrContainer)

      // Generate QR code after DOM is updated
      setTimeout(() => {
        new window.QRCode(qrDiv, {
          text: tableUrl,
          width: 200,
          height: 200,
          colorDark: '#1a5f3f',
          colorLight: '#ffffff',
          correctLevel: window.QRCode.CorrectLevel.H,
        })
      }, tableNum * 50)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = async () => {
    const canvas = document.querySelector('#qr-table-1 canvas') as HTMLCanvasElement
    if (canvas) {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'table-1-qr.png'
      link.click()
    }
  }

  return (
    <main className="min-h-screen bg-[#1a5f3f] py-12 px-4">
      <div className="container-max">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-[#d4af37] mb-4">
            Table QR Codes
          </h1>
          <p className="text-[#f5f1e8]/70 mb-8">
            Print or display these QR codes on your restaurant tables. Customers can scan to order directly from their table.
          </p>

          <div className="flex gap-4 mb-8">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 bg-[#d4af37] hover:bg-[#e6c547] text-[#1a5f3f] font-semibold rounded transition-colors"
            >
              <Printer size={20} />
              Print All QR Codes
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a5f3f] font-semibold rounded transition-colors"
            >
              <Download size={20} />
              Download Sample QR
            </button>
          </div>

          <div className="bg-[#0f3a25] border border-[#d4af37] border-opacity-30 rounded-lg p-6 text-[#f5f1e8]/80">
            <h3 className="font-semibold text-[#d4af37] mb-3">Instructions:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Print the QR codes and place them on each table</li>
              <li>Customers scan the QR code with their phone camera</li>
              <li>They are automatically directed to the menu for their table</li>
              <li>Orders are placed with the table number included</li>
              <li>Restaurant receives orders via WhatsApp with table details</li>
            </ul>
          </div>
        </div>

        <div className="print:hidden">
          <h2 className="text-2xl font-serif font-bold text-[#d4af37] mb-8">Preview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={containerRef}>
            {/* QR codes will be generated here */}
            {!qrCodesGenerated && (
              <div className="col-span-full text-center py-12">
                <p className="text-[#f5f1e8]/60">Loading QR code generator...</p>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @media print {
            body {
              background: white;
            }

            main {
              background: white;
              padding: 0;
            }

            .print\\:hidden {
              display: none !important;
            }

            .container-max > div:first-child {
              display: none !important;
            }

            [ref='containerRef'] {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 1rem;
              padding: 0;
            }
          }
        `}</style>
      </div>
    </main>
  )
}
