import style from 'styled-components'

export default style.div`
  position: absolute;
  display: grid;
  grid-template-columns: 30px 30px 30px 30px 30px;
  grid-template-rows: auto;
  justify-content: space-between;
  min-width: 200px;
  min-height: 100px;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 2px 6px 14px 6px #e2dede;
  padding: 6px;
  border-radius: 6px;
  color: #8e8e8e;
  z-index: 9000;
`
