type Item = {
  id: number
  name: string
  packagingType: string
  quantity: {
    value: number
    unit: string
  }
}

export const ALL_ITEMS: Record<number, Item> = {
  100: {
    id: 100,
    name: 'milk',
    packagingType: 'carton',
    quantity: {
      value: 1000,
      unit: 'ml',
    },
  },
  101: {
    id: 101,
    name: 'sugar',
    packagingType: 'bag',
    quantity: {
      value: 1000,
      unit: 'g',
    },
  },
  102: {
    id: 102,
    name: 'butter',
    packagingType: 'bag',
    quantity: {
      value: 500,
      unit: 'g',
    },
  },
}
