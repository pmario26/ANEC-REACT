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


 const q0 = [
  ['P1. Você tem problema de memória (ou de esquecimento)?', 'Não', 'Não Sabe responder','Sim' ],
  ['P2. Com que frequencia esse problema acontece?', 'Raramente/Nunca', 'Pouco/Mais ou menos', 'Muito/Frequente' ],
  ['P3. Esse problema de memoria tem atrapalhado suas atividades no dia-a-da?',  'Não',  'Pouco/mais ou menos',  'Muito/frequente' ],
  ['P4. Como esta sua memória em comparação com outras pessoas de sua idade?',  'Igual ou melhor',  'Um pouco pior',  'Muito pior' ],
  ['P5. Como esta sua memória em comparação a quando voce era mais jovem ?',  'Igual ou melhor',  'Um pouco pior',  'Muito pior' ],
  ['P6. Acontece de você esquecer o que acabou de ler ou de ouvir?',  'Raramente/Nunca',  'De vez em quando',  'Frequentemente' ],
  ['P7. De uma nota de 1 a 10 para sua memória: ',  '9 ou 10',  '5 a 8',  '1 a 4' ]
 
];

const q1 = [
  ['P1. Ele(a) tem problema de memória (ou de esquecimento)?',  'Não',  'Não Sabe responder',  'Sim' ],
  ['P2. Com que frequencia esse problema acontece?',  'Raramente/Nunca',  'Pouco/Mais ou menos',  'Muito/Frequente' ],
  ['P3. Esse problema de memoria tem atrapalhado atividades dele(a) no dia-a-da?', 'Não', 'Pouco/mais ou menos',  'Muito/frequente' ],
  ['P4. Como esta a memória dele(a) em comparação com outras pessoas de sua idade?',  'Igual ou melhor',  'Um pouco pior',  'Muito pior' ],
  ['P5. Como esta a memória dele(a) em comparação a quando era mais jovem ?', 'Igual ou melhor', 'Um pouco pior',  'Muito pior' ],
  ['P6. Acontece de ele(a) esquecer o que acabou de ler ou de ouvir?', 'Raramente/Nunca',  'De vez em quando',  'Frequentemente'],
  ['P7. De uma nota de 1 a 10 para a memória dele(a): ', '9 ou 10',  '5 a 8', '1 a 4' ]

];

const q2 = [
  ['A Eu me sinto tenso ou contraido','Nunca','De vez em quando','Boa parte do tempo','A maior parte do tempo'],
  ['D Ainda gosto das mesmas coisas de antes','Já não sinto prazer em nada','Só um pouco','Não tanto quanto antes','Sim,do mesmo jeito de antes'],
  ['A Eu sinto uma espécie de medo, como se alguma coisa ruim fosse acontecer','Não sinto nada disso','Um pouco, mas isso não me preocupa','Sim, mas não tão forte','Sim, e de um jeito muito forte'],
  ['D Dou risada e me divirto quando vejo coisas engraçadas','Do mesmo jeito que antes','Atualmente um pouco menos','Atualmente bem menos','Não consigo mais'],
  ['A estou com a cabeça cheia de preocupaçãoes','Raramente','De vez em quando','Boa parte do tempo','A maior parte do tempo'],
  ['D Eu me sinto alegre','A maior parte do tempo','Muitas vezes','Poucas vezes','Nunca'],
  ['A Consigo ficar a vontade e me sentir relaxado:','Nunca','Poucas vezes','Muitas vezes','Sim quase sempre'],
  ['D Eu estou lento para pensar e fazer as coisas','Nunca','De vez em quando','Muitas vezes','Quase sempre'],
  ['A Eu tenho uma sensação ruim de medo, como um frio na barriga ou um aperto no estômago:','Nunca','De vez em quando','Muitas vezes','Quase sempre'],
  ['D Eu perdi interesse em cuidar da minha aparência','Me cuido do mesmo jeito que antes','Talvez não tanto quanto antes','Não estou mais me cuidando como deveria','Completamente'],
  ['A Eu me sinto inquieto, como se eu não pudesse ficar parado em lugar nenhum:','Não me sinto assim','Um pouco','Bastante','Sim,demais'],
  ['D Fico esperando desanimado as coisas que estão por vir','Do mesmo jeito que antes','Um pouco menos que antes','Bem menos do que antes','Quase nunca'],
  ['A De repente, tenho a sensação de entrar em pânico:','Não sinto isso','De vez em quando','Várias vezes','A quase todo momento'],
  ['D Consigo sentir prazer quando assisto um bom programa de televisão,de rádio, ou quando leio alguma coisa:','Quase sempre','Várias vezes','Poucas vezes','Quase Nunca']
];

const q3 = [
  ['Quantidade de automóveis de passeio exclusivamente para uso particular','Não Possui','1','2','3','4+'],
  ['Quantidade de empregados mensalistas,considerando apenas os que trabalham cinco dias por semana','Não Possui','1','2','3','4+'],
  ['Quantidade de máquinas de lavar roupa, excluindo tanquinho','Não Possui','1','2','3','4+'],
  ['Quantidade de banheiros','Não Possui','1','2','3','4+'],
  ['DVD,incluindo qualquer dispositivo que leia DVD e desconsiderando DVD de automóvel','Não Possui','1','2','3','4+'],
  ['Quantidade de geladeiras','Não Possui','1','2','3','4+'],
  ['Quantidade de freezers independentes ou partes da geladeira duplex','Não Possui','1','2','3','4+'],
  ['Quantidade de microcomputadores,considerando computadores de mesa, laptops, notebooks e netbooks e desconsiderando tablets,palms ou smartphones','Não Possui','1','2','3','4+'],
  ['Quantidade de lavadora de louças','Não Possui','1','2','3','4+'],
  ['Quantidade de forno de micro-ondas','Não Possui','1','2','3','4+'],
  ['Quantidade de motocicletas, desconsiderando as usadas exclusivamente para uso profissional','Não Possui','1','2','3','4+'],
  ['Quantidade de máquinas secadoras de roupas,considerando lava e seca','Não Possui','1','2','3','4+'],
  ['A água utilizada neste domicílio é proveniente de?','Rede geral de distribuição','Poço ou nascente','Outro meio'],
  ['Considerando o trecho da rua do seu domicílio, você diria que a rua é:','Asfaltada/Pavimentada','Terra/Cascalho']
]

let count = 0;
let score = 0;
let qRender = [q0,q1,q2,q3]

const steps = ['EQM forma A', 'EQM forma B','HADS','ICS', 'END']

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
      questions: qRender[0],
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

    if (this.state.count < (this.state.questions.length - 1)  && !this.state.isHidden) {
      this.setState((state, props) => ({
        score: state.score + temp,
        count: state.count + 1
      }));
    }
    if (this.state.count == (this.state.questions.length - 1)) {
      this.setState((state, props) => ({
        count: 0,
        isHidden: true

      }));
    }
    if(this.state.count === 0 && this.state.isHidden){
      this.setState((state, props) => ({
        questions: qRender[state.activeStep + 1],
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
          <FormControlLabel className='radioS' value={`${index}`} control={<Radio id={`value${index}`} color="primary" />} label={row} />
          )
    });

    return (
      <div className='outer'>
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
        {!this.state.isHidden && <FormControl component="fieldset" className='form'>
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
