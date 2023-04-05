import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Tags from '../Tags'

import TasksAdded from '../TasksAdded'

import {
  MainContainer,
  Heading,
  FormContainer,
  Label,
  Input,
  Select,
  Options,
  SubmitButton,
  TagsListContainer,
  HeadingT,
  Main,
  NoTasks,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class CreateTask extends Component {
  state = {
    input: '',
    selectedOption: tagsList[0].displayText,
    tasksList: [],
    activeTab: '',
    isTrue: false,
  }

  onChangeInput = e => {
    this.setState({input: e.target.value})
  }

  tagChanged = e => {
    this.setState({selectedOption: e.target.value})
  }

  formSubmitted = e => {
    e.preventDefault()
    const {input, selectedOption} = this.state
    console.log(selectedOption)
    const selected =
      selectedOption.charAt(0).toUpperCase() +
      selectedOption.slice(1).toLowerCase()
    let newTask = null
    if (input !== '') {
      newTask = {
        id: uuidv4(),
        task: input,
        tag: selected,
      }
      this.setState({input: '', selectedOption: tagsList[0].displayText})
      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, newTask],
      }))
    } else {
      newTask = null
    }
  }

  onTagSelection = id => {
    const {tasksList} = this.state
    console.log(tasksList, id)
    const selected = tasksList.filter(item => item.tag.toUpperCase() === id)
    this.setState({selectedList: selected})
    console.log(selected)
    this.setState(prevState => ({isTrue: !prevState.isTrue}))
    const ac = tagsList.filter(item => item.optionId === id)
    const active = ac[0].displayText
    this.setState({activeTab: active})
  }

  render() {
    const {
      input,
      tasksList,
      selectedList,
      isTrue,
      activeTab,
      selectedOption,
    } = this.state
    let displayList = tasksList
    if (isTrue) {
      if (selectedList.length !== 0) {
        displayList = selectedList
      } else {
        displayList = tasksList
      }
    }
    return (
      <MainContainer>
        <FormContainer onSubmit={this.formSubmitted}>
          <Heading>Create a task!</Heading>
          <Label htmlFor="task">Task</Label>
          <Input
            type="text"
            value={input}
            onChange={this.onChangeInput}
            id="task"
            placeholder="Enter the task here"
          />
          <Label htmlFor="tags">Tags</Label>
          <Select id="tags" onChange={this.tagChanged} value={selectedOption}>
            {tagsList.map(item => (
              <Options value={item.displayText} key={item.optionId}>
                {item.displayText}
              </Options>
            ))}
          </Select>
          <SubmitButton type="submit">Add Task</SubmitButton>
        </FormContainer>
        <Main>
          <HeadingT>Tags</HeadingT>
          <TagsListContainer>
            {tagsList.map(item => (
              <Tags
                key={item.optionId}
                tagsList={item}
                onSelection={this.onTagSelection}
                activeTab={activeTab}
              />
            ))}
          </TagsListContainer>
          <>
            <HeadingT>Tasks</HeadingT>
            {displayList.length !== 0 ? (
              <>
                <TasksAdded tasksList={displayList} />
              </>
            ) : (
              <NoTasks>No Tasks Added Yet</NoTasks>
            )}
          </>
        </Main>
      </MainContainer>
    )
  }
}
export default CreateTask
