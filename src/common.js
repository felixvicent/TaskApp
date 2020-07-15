import { Alert } from 'react-native';

const server = 'https://felps-tasks.herokuapp.com';

function showError(err) {
  Alert.alert('Ops! Ocorreu um problema', `Mensagem: ${err}`);
}

function showSuccess(msg){
  Alert.alert('Sucesso!', msg);
}

export { server, showError, showSuccess };