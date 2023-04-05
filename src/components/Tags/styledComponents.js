import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  width: 100%;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-weight: 800;
  font-size: 20px;
  margin-top: 80px;
  margin-left: 30px;
`

export const MainContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 30px;
`

export const List = styled.li`
  width: 150px;
  height: 150px;
`

export const TagButton = styled.button`
  background-color: ${props => (props.isTrue ? '#f3aa4e' : 'transparent')};
  border-color: 1px solid #f1f5f9;
  border-radius: 15px;
  color: #ffffff;
  cursor: pointer;
`
export const Tasks = styled(Heading)`
  margin-top: 0px;
`
