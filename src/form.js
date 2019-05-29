import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Stepper from './stepper'
import Button from './App';


const questions = [
  { title: 'P1. Você tem problema de memória (ou de esquecimento)?', q1: 'Não', q2: 'Não Sabe responder', q3: 'Sim' },
  { title: 'P2. Com que frequencia esse problema acontece?', q1: 'Raramente/Nunca', q2: 'Pouco/Mais ou menos', q3: 'Muito/Frequente' },
  { title: 'P3. Esse problema de memoria tem atrapalhado suas atividades no dia-a-da?', q1: 'Não', q2: 'Pouco/mais ou menos', q3: 'Muito/frequente' },
  { title: 'P4. Como esta sua memória em comparação com outras pessoas de sua idade?', q1: 'Igual ou melhor', q2: 'Um pouco pior', q3: 'Muito pior' },
  { title: 'P5. Como esta sua memória em comparação a quando voce era mais jovem ?', q1: 'Igual ou melhor', q2: 'Um pouco pior', q3: 'Muito pior' },
  { title: 'P6. Acontece de você esquecer o que acabou de ler ou de ouvir?', q1: 'Raramente/Nunca', q2: 'De vez em quando', q3: 'Frequentemente' },
  { title: 'P7. De uma nota de 1 a 10 para sua memória: ', q1: '9 ou 10', q2: '5 a 8', q3: '1 a 4' }

];

const questions2 = [
  { title: 'P1. Ele(a) tem problema de memória (ou de esquecimento)?', q1: 'Não', q2: 'Não Sabe responder', q3: 'Sim' },
  { title: 'P2. Com que frequencia esse problema acontece?', q1: 'Raramente/Nunca', q2: 'Pouco/Mais ou menos', q3: 'Muito/Frequente' },
  { title: 'P3. Esse problema de memoria tem atrapalhado atividades dele(a) no dia-a-da?', q1: 'Não', q2: 'Pouco/mais ou menos', q3: 'Muito/frequente' },
  { title: 'P4. Como esta a memória dele(a) em comparação com outras pessoas de sua idade?', q1: 'Igual ou melhor', q2: 'Um pouco pior', q3: 'Muito pior' },
  { title: 'P5. Como esta a memória dele(a) em comparação a quando era mais jovem ?', q1: 'Igual ou melhor', q2: 'Um pouco pior', q3: 'Muito pior' },
  { title: 'P6. Acontece de ele(a) esquecer o que acabou de ler ou de ouvir?', q1: 'Raramente/Nunca', q2: 'De vez em quando', q3: 'Frequentemente' },
  { title: 'P7. De uma nota de 1 a 10 para a memória dele(a): ', q1: '9 ou 10', q2: '5 a 8', q3: '1 a 4' }

];

let count = 0;
let score = 0;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

function next() {
  console.log('hi')
}

class RadioButtonsGroup extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      questions,
      score: 0,
      isHidden: false
    }

  }


  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  nextQuestion() {
    console.log(this.state)
    var temp = 0;
    
    if(!this.state.isHidden){
    if (document.getElementById("value2").checked)
      temp = 1;
    if (document.getElementById("value3").checked)
      temp = 2;}

    if (this.state.count < 6  && !this.state.isHidden) {
      this.setState((state, props) => ({
        score: state.score + temp,
        count: state.count + 1
      }));
    }
    if (this.state.count == 6) {
      this.setState((state, props) => ({
        count: 0,
        isHidden: true

      }));
    }
    if(this.state.count === 0 && this.state.isHidden){
      this.setState((state, props) => ({
        questions: questions2,
        isHidden: false

      }));
    }
      
    
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Stepper display='inline'/>
        {!this.state.isHidden && <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{this.state.questions[this.state.count].title}</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value={'0'} control={<Radio id='value1' color="primary" />} label={this.state.questions[this.state.count].q1} />
            <FormControlLabel value={'1'} control={<Radio id='value2' color="primary" />} label={this.state.questions[this.state.count].q2} />
            <FormControlLabel value={'2'} control={<Radio id='value3' color="primary" />} label={this.state.questions[this.state.count].q3} />


          </RadioGroup>
          <Button nextQuestion={this.nextQuestion.bind(this)} text='Avançar' />
        </FormControl>}
        {this.state.isHidden &&
          <div>
            <span> {this.state.score}</span>
            <Button nextQuestion={this.nextQuestion.bind(this)} text='Próximo Teste' />

          </div>
        }





      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(RadioButtonsGroup);
