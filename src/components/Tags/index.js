import {TagButton, List} from './styledComponents'

const Tags = props => {
  const {tagsList, onSelection, activeTab} = props
  const {optionId, displayText} = tagsList
  const isTrue = activeTab === displayText

  const selected = () => {
    onSelection(optionId)
  }

  return (
    <>
      <List key={tagsList.optionId}>
        <TagButton type="button" onClick={selected} isTrue={isTrue}>
          {tagsList.displayText}
        </TagButton>
      </List>
    </>
  )
}

export default Tags
