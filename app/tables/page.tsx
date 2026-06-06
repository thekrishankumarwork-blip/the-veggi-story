import { Metadata } from 'next'
import { TablesQRGenerator } from '@/components/TablesQRGenerator'

export const metadata: Metadata = {
  title: 'Table QR Codes | The Veggie Story',
  description: 'QR codes for table-based ordering at The Veggie Story',
}

export default function TablesPage() {
  return <TablesQRGenerator />
}
