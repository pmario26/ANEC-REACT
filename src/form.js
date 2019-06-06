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

const qInf = ['Curvar-se, agachar-se ou ajoelhar-se?',
              'Levantar ou carregar objetos com peso aproximado de 5 quilos?',
              'Elevar ou estender os braços acima do ombro?',
              'Escrever ou manusear e segurar pequenos objetos?',
              'Andar 400 metros (aproximadamente 4 quarteirões) ?',
              'Fazer serviço doméstico pesado como esfregar o chão ou limpar janelas ?',
 
]

const qInf2 = [
  ['Fazer compras de itens pessoais( como produtos de higiene pessoal ou medicamentos)?','Não faço compras'],
  ['Lidar com dinheiro (como controlar suas desposas ou pagar contas?','Não lido com dinheiro'],
  ['Atravessar o quarto andando (permitido o uso de bengala ou andador)?','Não ando'],
  ['Realizar tarefas domésticas leves(como lavar louça ou fazer limpeza leve','Não faço tarefas domésticas leves'],
  ['Tomar banho de chuveiro ou de banheira?','Não tomo banho de chuveiro ou banheira']
]

let count = 0;
let score = 0;
let qRender = [q0,q1,q2,q3]

const steps = ['EQM forma A', 'EQM forma B','HADS','ICS','VES-13', 'END']

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
      specialState: 0,
      specialQuestions: qInf,
      lastQuestions: qInf2,
      specialCount:0,
      lastCount:0

    }

  }


  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  nextQuestion() {   
    var temp = 0;
    
    if(!this.state.isHidden && !this.state.specialTest ){
      
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
          activeStep: 4,
          specialTest: true
  
        }));
      }
    }
      
    
  };

  surveyNext(){
    if(this.state.specialState === 2){
      this.setState((state, props) => ({
        specialCount: state.specialCount + 1  
      }));
      if(this.state.specialCount !== 5)
      return;
    }
    if(this.state.specialState === 3){
      this.setState((state, props) => ({
        lastCount: state.lastCount + 1  
      }));
      if(this.state.lastCount !== 4)
      return;
      this.setState((state, props) => ({         
        activeStep: 5

      }));   
      

    }

    this.setState((state, props) => ({
      specialState: state.specialState + 1

    }));
  }
  restart(){
    setTimeout(() => {
      window.location.reload(false); 
    }, 100);
  }
  render() {
    const { classes } = this.props;
    var myList = this.state.questions[this.state.count].map((row,index)=>{
      if(index > 2)
        return (
          <FormControlLabel className='radioS' value={`${index}`} control={<Radio id={`value${index}`} color="primary" />} label={row} />
          )
    });
    var vList;
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
          <h2>{this.state.questions[this.state.count][0]}</h2>
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
        {this.state.specialTest && <div className='matter'>
          <h2>Vulnerable Elders Survey-13 (VES-13)</h2>
          {this.state.specialState === 0 && <div>
            <div className='ageContainer'>
          Idade:<input type='number' name='age'/>
          </div>
          <Button nextQuestion={this.surveyNext.bind(this)} text='Avançar' />
          </div>}
          {this.state.specialState === 1 && <div>
             <FormControl component="fieldset" className='form'>
             <FormLabel id='title01' component="legend">{'Em geral,comparado com outras pessoas da sua idade,você diria que sua memória é:'}</FormLabel>
             
             <RadioGroup
               aria-label="Gender"
               name="gender1"
               className={classes.group}
               value={this.state.value}
               onChange={this.handleChange}
             >
               <FormControlLabel className='radioS' value={`${1}`} control={<Radio id={`value${1}`} color="primary" />} label={'Ruim'} />
               <FormControlLabel className='radioS' value={`${2}`} control={<Radio id={`value${2}`} color="primary" />} label={'Regular'} />
               <FormControlLabel className='radioS' value={`${3}`} control={<Radio id={`value${3}`} color="primary" />} label={'Boa'} />
               <FormControlLabel className='radioS' value={`${4}`} control={<Radio id={`value${3}`} color="primary" />} label={'Muito Boa'} />
               <FormControlLabel className='radioS' value={`${5}`} control={<Radio id={`value${3}`} color="primary" />} label={'Excelente'} />


             </RadioGroup>
             <Button nextQuestion={this.surveyNext.bind(this)} text='Avançar' />
           </FormControl>
           </div>
          }
          {this.state.specialState === 2 && <div>
            <h4>{'Em média, quanta dificuldade você tem para fazer as seguintes atividades físicas:'}</h4>
            <FormControl component="fieldset" className='form'>              
             <FormLabel id='title01' component="legend">{this.state.specialQuestions[this.state.specialCount]}</FormLabel>
             
             <RadioGroup
               aria-label="Gender"
               name="gender1"
               className={classes.group}
               value={this.state.value}
               onChange={this.handleChange}
             >

              <FormControlLabel className='radioS' value={`${1}`} control={<Radio id={`value${1}`} color="primary" />} label={'Nenhuma dificuldade'} />
               <FormControlLabel className='radioS' value={`${2}`} control={<Radio id={`value${2}`} color="primary" />} label={'Pouca dificuldade'} />
               <FormControlLabel className='radioS' value={`${3}`} control={<Radio id={`value${3}`} color="primary" />} label={'Média dificuldade '} />
               <FormControlLabel className='radioS' value={`${4}`} control={<Radio id={`value${3}`} color="primary" />} label={'Muita dificuldade'} />
               <FormControlLabel className='radioS' value={`${5}`} control={<Radio id={`value${3}`} color="primary" />} label={'Incapaz de fazer'} />
               </RadioGroup>
             <Button nextQuestion={this.surveyNext.bind(this)} text='Avançar' />
           </FormControl>
            </div>
            
          }
          {
            this.state.specialState === 3 && <div>
              <h4>{'Por causa da sua saude ou condição física,você tem alguma dificuldade para:'}</h4>
            <FormControl component="fieldset" className='form'>              
             <FormLabel id='title01' component="legend">{this.state.lastQuestions[this.state.lastCount][0]}</FormLabel>
             
             <RadioGroup
               aria-label="Gender"
               name="gender1"
               className={classes.group}
               value={this.state.value}
               onChange={this.handleChange}
             >

              <FormControlLabel className='radioS' value={`${1}`} control={<Radio id={`value${1}`} color="primary" />} label={'Sim'} />
               <FormControlLabel className='radioS' value={`${2}`} control={<Radio id={`value${2}`} color="primary" />} label={'Não'} />
               <FormControlLabel className='radioS' value={`${3}`} control={<Radio id={`value${2}`} color="primary" />} label={this.state.lastQuestions[this.state.lastCount][1]} />
               
               </RadioGroup>
             <Button nextQuestion={this.surveyNext.bind(this)} text='Avançar' />
           </FormControl>

            </div>
          }
          {
            this.state.specialState === 4 && <Button nextQuestion={this.restart.bind(this)} text='Reiniciar' />
          }
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
