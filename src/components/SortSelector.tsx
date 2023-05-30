import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
interface Props {
  onSelectSortOrderItems: (sortOrderItem: string) => void;
  sortOrderItem: string;
}
const SortSelector = ({ onSelectSortOrderItems, sortOrderItem }: Props) => {
  const sortOrderItems = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]
  const currentOrderItem = sortOrderItems.find(order => order.value === sortOrderItem)
  return (
    <Menu >
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentOrderItem?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrderItems.map(order => <MenuItem onClick={() => onSelectSortOrderItems(order.value)} key={order.value} value={order.value}>
          {order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector