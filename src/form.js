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
  ['Escala de Queixa de Memória (EQM) - Forma A','Instrução: Aplique direto com o(a) paciente, na ausência do(a) acompanhante','P1. Você tem problema de memória (ou de esquecimento)?', 'Não', 'Não Sabe responder','Sim' ],
  ['Escala de Queixa de Memória (EQM) - Forma A','Instrução: Aplique direto com o(a) paciente, na ausência do(a) acompanhante','P2. Com que frequencia esse problema acontece?', 'Raramente/Nunca', 'Pouco/Mais ou menos', 'Muito/Frequente' ],
  ['Escala de Queixa de Memória (EQM) - Forma A','Instrução: Aplique direto com o(a) paciente, na ausência do(a) acompanhante','P3. Esse problema de memoria tem atrapalhado suas atividades no dia-a-da?',  'Não',  'Pouco/mais ou menos',  'Muito/frequente' ],
  ['Escala de Queixa de Memória (EQM) - Forma A','Instrução: Aplique direto com o(a) paciente, na ausência do(a) acompanhante','P4. Como esta sua memória em comparação com outras pessoas de sua idade?',  'Igual ou melhor',  'Um pouco pior',  'Muito pior' ],
  ['Escala de Queixa de Memória (EQM) - Forma A','Instrução: Aplique direto com o(a) paciente, na ausência do(a) acompanhante','P5. Como esta sua memória em comparação a quando voce era mais jovem ?',  'Igual ou melhor',  'Um pouco pior',  'Muito pior' ],
  ['Escala de Queixa de Memória (EQM) - Forma A','Instrução: Aplique direto com o(a) paciente, na ausência do(a) acompanhante','P6. Acontece de você esquecer o que acabou de ler ou de ouvir?',  'Raramente/Nunca',  'De vez em quando',  'Frequentemente' ],
  ['Escala de Queixa de Memória (EQM) - Forma A','Instrução: Aplique direto com o(a) paciente, na ausência do(a) acompanhante','P7. De uma nota de 1 a 10 para sua memória: ',  '9 ou 10',  '5 a 8',  '1 a 4' ]
 
];

const q1 = [
  ['Escala de Queixa de Memória (EQM) - Forma B','Instrução: Aplique com o(a) acompanhante referindo-se ao(a) paciente, na ausência dele(a)','P1. Ele(a) tem problema de memória (ou de esquecimento)?',  'Não',  'Não Sabe responder',  'Sim' ],
  ['Escala de Queixa de Memória (EQM) - Forma B','Instrução: Aplique com o(a) acompanhante referindo-se ao(a) paciente, na ausência dele(a)','P2. Com que frequencia esse problema acontece?',  'Raramente/Nunca',  'Pouco/Mais ou menos',  'Muito/Frequente' ],
  ['Escala de Queixa de Memória (EQM) - Forma B','Instrução: Aplique com o(a) acompanhante referindo-se ao(a) paciente, na ausência dele(a)','P3. Esse problema de memoria tem atrapalhado atividades dele(a) no dia-a-da?', 'Não', 'Pouco/mais ou menos',  'Muito/frequente' ],
  ['Escala de Queixa de Memória (EQM) - Forma B','Instrução: Aplique com o(a) acompanhante referindo-se ao(a) paciente, na ausência dele(a)','P4. Como esta a memória dele(a) em comparação com outras pessoas de sua idade?',  'Igual ou melhor',  'Um pouco pior',  'Muito pior' ],
  ['Escala de Queixa de Memória (EQM) - Forma B','Instrução: Aplique com o(a) acompanhante referindo-se ao(a) paciente, na ausência dele(a)','P5. Como esta a memória dele(a) em comparação a quando era mais jovem ?', 'Igual ou melhor', 'Um pouco pior',  'Muito pior' ],
  ['Escala de Queixa de Memória (EQM) - Forma B','Instrução: Aplique com o(a) acompanhante referindo-se ao(a) paciente, na ausência dele(a)','P6. Acontece de ele(a) esquecer o que acabou de ler ou de ouvir?', 'Raramente/Nunca',  'De vez em quando',  'Frequentemente'],
  ['Escala de Queixa de Memória (EQM) - Forma B','Instrução: Aplique com o(a) acompanhante referindo-se ao(a) paciente, na ausência dele(a)','P7. De uma nota de 1 a 10 para a memória dele(a): ', '9 ou 10',  '5 a 8', '1 a 4' ]

];

const q2 = [
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','A Eu me sinto tenso ou contraido','Nunca','De vez em quando','Boa parte do tempo','A maior parte do tempo'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','D Ainda gosto das mesmas coisas de antes','Já não sinto prazer em nada','Só um pouco','Não tanto quanto antes','Sim,do mesmo jeito de antes'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','A Eu sinto uma espécie de medo, como se alguma coisa ruim fosse acontecer','Não sinto nada disso','Um pouco, mas isso não me preocupa','Sim, mas não tão forte','Sim, e de um jeito muito forte'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','D Dou risada e me divirto quando vejo coisas engraçadas','Do mesmo jeito que antes','Atualmente um pouco menos','Atualmente bem menos','Não consigo mais'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','A estou com a cabeça cheia de preocupaçãoes','Raramente','De vez em quando','Boa parte do tempo','A maior parte do tempo'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','D Eu me sinto alegre','A maior parte do tempo','Muitas vezes','Poucas vezes','Nunca'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','A Consigo ficar a vontade e me sentir relaxado:','Nunca','Poucas vezes','Muitas vezes','Sim quase sempre'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','D Eu estou lento para pensar e fazer as coisas','Nunca','De vez em quando','Muitas vezes','Quase sempre'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','A Eu tenho uma sensação ruim de medo, como um frio na barriga ou um aperto no estômago:','Nunca','De vez em quando','Muitas vezes','Quase sempre'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','D Eu perdi interesse em cuidar da minha aparência','Me cuido do mesmo jeito que antes','Talvez não tanto quanto antes','Não estou mais me cuidando como deveria','Completamente'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','A Eu me sinto inquieto, como se eu não pudesse ficar parado em lugar nenhum:','Não me sinto assim','Um pouco','Bastante','Sim,demais'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','D Fico esperando desanimado as coisas que estão por vir','Do mesmo jeito que antes','Um pouco menos que antes','Bem menos do que antes','Quase nunca'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','A De repente, tenho a sensação de entrar em pânico:','Não sinto isso','De vez em quando','Várias vezes','A quase todo momento'],
  ['Escala Hospitalar de Ansiedade e Depressão (HADS)','Marque a resposta que melhor corresponde a como você tem se sentido na ultima semana','D Consigo sentir prazer quando assisto um bom programa de televisão,de rádio, ou quando leio alguma coisa:','Quase sempre','Várias vezes','Poucas vezes','Quase Nunca']
];

const q3 = [
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de automóveis de passeio exclusivamente para uso particular','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de empregados mensalistas,considerando apenas os que trabalham cinco dias por semana','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de máquinas de lavar roupa, excluindo tanquinho','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de banheiros','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','DVD,incluindo qualquer dispositivo que leia DVD e desconsiderando DVD de automóvel','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de geladeiras','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de freezers independentes ou partes da geladeira duplex','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de microcomputadores,considerando computadores de mesa, laptops, notebooks e netbooks e desconsiderando tablets,palms ou smartphones','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de lavadora de louças','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de forno de micro-ondas','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de motocicletas, desconsiderando as usadas exclusivamente para uso profissional','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','Itens de Conforto','Quantidade de máquinas secadoras de roupas,considerando lava e seca','Não Possui','1','2','3','4+'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','','A água utilizada neste domicílio é proveniente de?','Rede geral de distribuição','Poço ou nascente','Outro meio'],
  ['INSTRUMENTAL DE CLASSIFICAÇÃO SOCIOECONÔMICA','','Considerando o trecho da rua do seu domicílio, você diria que a rua é:','Asfaltada/Pavimentada','Terra/Cascalho']
]

const q4 = [
  ['Em geral, comparando com outras pessoas da sua idade, você diria que sua memória é :','Ruim','Regular','Boa','Muito Boa','Excelente']
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
      activeStep:0,
      specialTest: false,
      age : 23

    }

  }


  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  nextQuestion() {
    console.log(this.state)
    var temp = 0;
    
    if(!this.state.isHidden){
    if (document.getElementById("value3").checked)
      temp = 1;
    if (document.getElementById("value4").checked)
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
      if(qRender[this.state.activeStep + 1])
      this.setState((state, props) => ({
        questions: qRender[state.activeStep + 1],
        isHidden: false,
        activeStep: state.activeStep + 1

      }));
      else{
        this.setState((state, props) => ({         
          activeStep: 4
  
        }));
      }
    }
      
    
  };
  render() {
    const { classes } = this.props;
    var myList = this.state.questions[this.state.count].map((row,index)=>{
      if(index > 2)
        return (
          <FormControlLabel className='radioS' value={`${index}`} control={<Radio id={`value${index}`} color="primary" />} label={row} />
          )
    });

    return (
      <div className='outer'>
        <div className='stepper'>
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
      </div>
        {!this.state.isHidden && !this.state.specialTest && 
        <div className="matter">
          <h1>{this.state.questions[this.state.count][0]}</h1>
          <h4>{this.state.questions[this.state.count][1]}</h4>
        <FormControl component="fieldset" className='form'>
          <FormLabel id='title01' component="legend">{this.state.questions[this.state.count][2]}</FormLabel>
          
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
        </FormControl>
        </div>}
        {this.state.isHidden && !this.state.specialTest &&
          <div className='matter row-middle'>
            <div className='buttonWrapper'>
            <Button  nextQuestion={this.nextQuestion.bind(this)} text='Próximo Teste' />
            </div>
          </div>
        }
        {this.state.specialTest && <div>
          Age:<input type='text' name='age'/><br></br>
          <Button nextQuestion={this.nextQuestion.bind(this)} text='Avançar' />


          </div>}
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(RadioButtonsGroup);
