export interface ICardProps {
  title?: string
  subtitle?: string
  titleSection?: string
  gridColumns?: number
  gridRows?: number
  columnSpan?: number
  contentGridColumns?: number
  contentGridRows?: number
  contentColumnSpan?: number
  cardFilter?: React.ReactNode
  children: React.ReactNode
}
