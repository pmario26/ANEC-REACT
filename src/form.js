import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import App from './App';


const questions = [
    {title:'P1. Você tem problema de memória (ou de esquecimento)?',q1:'Não',q2:'Não Sabe responder',q3:'Sim'},
    {title:'P2. Com que frequencia esse problema acontece?',q1:'Raramente/Nunca',q2:'Pouco/Mais ou menos',q3:'Muito/Frequente'},
    {title:'P3. Esse problema de memoria tem atrapalhado suas atividades no dia-a-da?',q1:'Não',q2:'Pouco/mais ou menos',q3:'Muito/frequente'},
    {title:'P4. Como esta sua memória em comparação com outras pessoas de sua idade?',q1:'Igual ou melhor',q2:'Um pouco pior',q3:'Muito pior'},
    {title:'P5. Como esta sua memória em comparação a quando voce era mais jovem ?',q1:'Igual ou melhor',q2:'Um pouco pior',q3:'Muito pior'},
    {title:'P6. Acontece de você esquecer o que acabou de ler ou de ouvir?',q1:'Não',q2:'Pouco/mais ou menos',q3:'Muito/frequente'},
    {title:'P7. De uma nota de 1 a 10 para sua memória: ',q1:'9 ou 10',q2:'5 a 8',q3:'1 a 4'}

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

function next(){
    console.log('hi')
}

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'female',
  };
    constructor(props) {
    super(props);
    this.count = {value:0};
}
  

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  nextQuestion(){
      //this.setState(this.count++);
      this.setState({value:this.count.value++});
      console.log(this.count.value)
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{questions[0].title}</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="female" control={<Radio color="primary"  />} label={questions[this.count.value].q1}  />
            <FormControlLabel value="male" control={<Radio color="primary" />} label={questions[this.count.value].q2} />
            <FormControlLabel value="other" control={<Radio color="primary" />} label={questions[this.count.value].q3} />
            <FormControlLabel value="other" control={<Radio color="primary" />} label={this.count.value} />

            
          </RadioGroup>
          <App nextQuestion={this.nextQuestion.bind(this)}/>
        </FormControl>
        
        
       
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(RadioButtonsGroup);
