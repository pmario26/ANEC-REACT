import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from './App';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';





let questions = [
  {title: 'P1. Você tem problema de memória (ou de esquecimento)?', q1: 'Não', q2: 'Não Sabe responder', q3: 'Sim' },
  { title: 'P2. Com que frequencia esse problema acontece?', q1: 'Raramente/Nunca', q2: 'Pouco/Mais ou menos', q3: 'Muito/Frequente' },
  { title: 'P3. Esse problema de memoria tem atrapalhado suas atividades no dia-a-da?', q1: 'Não', q2: 'Pouco/mais ou menos', q3: 'Muito/frequente' },
  { title: 'P4. Como esta sua memória em comparação com outras pessoas de sua idade?', q1: 'Igual ou melhor', q2: 'Um pouco pior', q3: 'Muito pior' },
  { title: 'P5. Como esta sua memória em comparação a quando voce era mais jovem ?', q1: 'Igual ou melhor', q2: 'Um pouco pior', q3: 'Muito pior' },
  { title: 'P6. Acontece de você esquecer o que acabou de ler ou de ouvir?', q1: 'Raramente/Nunca', q2: 'De vez em quando', q3: 'Frequentemente' },
  { title: 'P7. De uma nota de 1 a 10 para sua memória: ', q1: '9 ou 10', q2: '5 a 8', q3: '1 a 4' }

];

 questions = [
  ['P1. Você tem problema de memória (ou de esquecimento)?', 'Não', 'Não Sabe responder','Sim' ],
  ['P2. Com que frequencia esse problema acontece?', 'Raramente/Nunca', 'Pouco/Mais ou menos', 'Muito/Frequente' ],
  ['P3. Esse problema de memoria tem atrapalhado suas atividades no dia-a-da?',  'Não',  'Pouco/mais ou menos',  'Muito/frequente' ],
  ['P4. Como esta sua memória em comparação com outras pessoas de sua idade?',  'Igual ou melhor',  'Um pouco pior',  'Muito pior' ],
  ['P5. Como esta sua memória em comparação a quando voce era mais jovem ?',  'Igual ou melhor',  'Um pouco pior',  'Muito pior' ],
  ['P6. Acontece de você esquecer o que acabou de ler ou de ouvir?',  'Raramente/Nunca',  'De vez em quando',  'Frequentemente' ],
  ['P7. De uma nota de 1 a 10 para sua memória: ',  '9 ou 10',  '5 a 8',  '1 a 4' ]
 
];

const questions2 = [
  ['P1. Ele(a) tem problema de memória (ou de esquecimento)?',  'Não',  'Não Sabe responder',  'Sim' ],
  ['P2. Com que frequencia esse problema acontece?',  'Raramente/Nunca',  'Pouco/Mais ou menos',  'Muito/Frequente' ],
  ['P3. Esse problema de memoria tem atrapalhado atividades dele(a) no dia-a-da?', 'Não', 'Pouco/mais ou menos',  'Muito/frequente' ],
  ['P4. Como esta a memória dele(a) em comparação com outras pessoas de sua idade?',  'Igual ou melhor',  'Um pouco pior',  'Muito pior' ],
  ['P5. Como esta a memória dele(a) em comparação a quando era mais jovem ?', 'Igual ou melhor', 'Um pouco pior',  'Muito pior' ],
  ['P6. Acontece de ele(a) esquecer o que acabou de ler ou de ouvir?', 'Raramente/Nunca',  'De vez em quando',  'Frequentemente'],
  ['P7. De uma nota de 1 a 10 para a memória dele(a): ', '9 ou 10',  '5 a 8', '1 a 4' ]

];

let count = 0;
let score = 0;

const steps = ['EQM forma A', 'EQM forma B', 'END']

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
      isHidden: false,
      activeStep:0

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
        isHidden: false,
        activeStep: state.activeStep + 1

      }));
    }
      
    
  };
  render() {
    const { classes } = this.props;
    var myList = this.state.questions[this.state.count].map((row,index)=>{
      if(index > 0)
        return (
          <FormControlLabel value={`${index}`} control={<Radio id={`value${index}`} color="primary" />} label={row} />
          )
    });

    return (
      <div className={classes.root}>
        <Stepper activeStep={this.state.activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
        {!this.state.isHidden && <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{this.state.questions[this.state.count][0]}</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            {myList}
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
