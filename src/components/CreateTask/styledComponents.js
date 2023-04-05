import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1a171d;
  min-height: 100vh;
  max-height: 100%;
  justify-content: flex-start;
  padding: 15px;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 30px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 80px;
  margin-left: 110px;
`

export const Label = styled.label`
  color: #ffffff;
  font-size: 15px;
  font-weight: 800px;
  margin-bottom: 10px;
`

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 15px;
  margin-bottom: 10px;
`
export const Select = styled.select`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-bottom: 10px;
`

export const Options = styled.option`
  color: #000000;
  font-size: 15px;
`

export const SubmitButton = styled.button`
  background-color: #f3aa4e;
  border-color: transparent;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`
export const TagsListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 30px;
`

export const ListItem = styled.li`
  width: 150px;
  height: 150px;
`

export const HeadingT = styled.h1`
  color: #ffffff;
  font-weight: 800;
  font-size: 20px;
  margin-top: 80px;
  margin-left: 30px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  width: 100%;
`
export const NoTasks = styled.p`
  font-size: 25px;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
`
