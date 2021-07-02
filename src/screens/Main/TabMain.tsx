import React, { useState } from 'react'
import ActionBar from '../../components/ActionBar'
import TabContainer from './TabContainer'

export enum category {
  SCIENCE = 'science',
  COMPUTER = 'computer',
  SPORTS = 'sports',
  ANIMALS = 'animals',
  TRAVEL = 'travel',
}

const TabMain = () => {
  const [activeCategory, setActiveCategory] = useState<category>(category.SCIENCE)

  return (
    <div style={{ height: '100%' }}>
      <ActionBar
        activeCategory={activeCategory}
        handleCategorySelect={(cat: category) => {
          setActiveCategory(cat)
        }}
      />
      <TabContainer activeCategory={activeCategory} />
    </div>
  )
}

export default TabMain
