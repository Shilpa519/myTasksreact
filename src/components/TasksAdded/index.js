import {MainContainer, ListItem, ListValue, ListTag} from './styledComponents'

const TasksAdded = props => {
  const {tasksList} = props

  return (
    <MainContainer>
      {tasksList.map(item => (
        <ListItem key={item.id}>
          <ListValue>{item.task}</ListValue>
          <ListTag>{item.tag}</ListTag>
        </ListItem>
      ))}
    </MainContainer>
  )
}

export default TasksAdded
