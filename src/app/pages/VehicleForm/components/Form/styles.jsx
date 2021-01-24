import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .form {
    width: 100%;
    max-width: 800px;
    margin: 0 20px;
  }
  .header {
    margin-bottom: 30px;
  }
  .error-message {
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .form-button {
    width: 150px;
  }
  .buttons-container {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .actions-buttons {
    display: flex;
  }
`

export {
  FormContainer
}