interface PropertyCardProps {
  property: PropertyProps
}

interface PropertyListProps {
  properties: PropertyProps[]
}

interface SearchBarProps {
  onSearch: (query: string) => void
}

type PropertyProps = {
  id: string
  title: string
  description: string
  price: string
  location: string
  image: string
}

type Action = {
  type: "LoadProperties"
}

type ActionWithPayload = { type: "SearchProduct"; payload: string }

type ActionTypes = Action | ActionWithPayload
