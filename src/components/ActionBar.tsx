import styled from 'styled-components'
import { category } from '../screens/Main/TabMain'
import TabButton from './TabButton'

const ActionBarWrapper = styled.div`
  height: 70px;
  padding: 0 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface IActionBar {
  activeCategory: string
  handleCategorySelect: (cat: category) => void
}

const ActionBar = ({ activeCategory, handleCategorySelect }: IActionBar) => {
  return (
    <ActionBarWrapper>
      {Object.keys(category).map((cat: string) => {
        const temp: any = { ...category }
        const actCat: category = temp[cat]
        return (
          <TabButton
            key={cat}
            onClick={() => handleCategorySelect(actCat)}
            isActive={activeCategory === actCat}
          >
            {cat}
          </TabButton>
        )
      })}
    </ActionBarWrapper>
  )
}

export default ActionBar
