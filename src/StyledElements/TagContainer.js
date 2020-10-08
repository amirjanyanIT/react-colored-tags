import styled from 'styled-components'

export default styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  min-width: 80px;
  padding: 7px;
  margin: 5px 10px 5px 0;
  color: #f0f0f0;
  border-radius: 2px;
  cursor: pointer;
  .delete-action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    width: 15px;
    height: 15px;
    font-size: 13px;
    border-radius: 15px;
    &:hover {
      color: #ff8aa0;
    }
  }
`
