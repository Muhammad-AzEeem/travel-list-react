import { useState } from 'react'

export default function Item({ item, onDeleteItem, onToggleItem }) {
  const [isCheck, setIsCheck] = useState(false)

  return (
    <li>
      <input
        type='checkbox'
        value={isCheck}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
