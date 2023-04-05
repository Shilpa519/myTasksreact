import styled from 'styled-components'

export const MainContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #475569;
  margin-bottom: 15px;
  margin-left: 10px;
  width: 850px;
`

export const ListValue = styled.p`
  font-size: 20px;
  padding: 5px;
  color: #ffffff;
  width: 250px;
  margin-left: 10px;
`

export const ListTag = styled.button`
  background-color: #f3aa4e;
  color: #1a171d;
  height: 50px;
  font-size: 15px;
  border: 1px solid transparent;
  border-radius: 15px;
  margin-right: 15px;
  text-align: center;
  padding: 5px;
`
