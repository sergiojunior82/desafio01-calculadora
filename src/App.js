import { useState } from 'react';
import { Container, Content, Row } from './styles'
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => prev === '0' || prev === '' ? number : prev + number);
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperator(null);
  }

  const handleOperation = (op) => {
    if (!firstNumber) {
      setFirstNumber(currentNumber);
      setCurrentNumber('');
    } else if (operator) {
      handleCalculate();
    }
    setOperator(op);
  }

  const handleCalculate = () => {
    if (operator && firstNumber !== null) {
      const result = calculate(parseFloat(firstNumber), parseFloat(currentNumber), operator);
      setCurrentNumber(String(result));
      setFirstNumber(null);
      setOperator(null);
    }
  }

  const calculate = (num1, num2, op) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return num2;
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} placeholder="Digite um número" />
        <Row>
          <Button label="*" onClick={() => handleOperation('*')} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="c" onClick={handleClear} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleOperation('-')} />
          
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleCalculate} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;