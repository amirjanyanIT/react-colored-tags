import styled from 'styled-components'

export default styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  min-width: 80px;
  padding: 7px;
  margin: 5px 10px 5px 0;
  color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 0 10px 3px #cccccc;
  cursor: pointer;
  .delete-action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    width: 15px;
    height: 15px;
    border: 1px solid white;
    font-size: 12px;
    border-radius: 15px;
  }
`
