class Taschenrecher{
  constructor(preDataText, aktDataText){
    this.preDataText = preDataText;
    this.aktDataText = aktDataText;
    this.clear();
  }
  
  clear(){
     this.preData= '';
     this.aktData = '';
      this.operation = undefined;
      this.aktDataText.innerText = '';
      this.preDataText.innerText = '';
  }

  loeschen(){
    this.aktData = this.aktData.toString().slice(0,-1);
      console.log(this.aktDataText.innerText );
  }

  rechnen(){

    let erg ;
    const pre = parseFloat(this.preData);
    const akt = parseFloat(this.aktData);
    console.log(akt, pre);
    if(isNaN(akt) || isNaN(pre))
      return;
    switch(this.operation){
      case '+' : erg= pre + akt;
      break;
      case '-' : erg= pre - akt;
      break;
      case 'x': erg = pre * akt;
      break;
      case '÷' : erg= pre / akt;
      break;
      default : return; 
    }
    this.aktData = erg;
    this.operation = undefined;
    this.preData= ' ';
  
  }

  ausgewaehlteOperation(operation){
    if(this.aktData === '')
      return;
    if(this.preData !== ''){
      this.rechnen()
    }
    this.operation = operation;
    this.preData = this.aktData;
    this.aktData = '';
    this.preDataText.innerText = this.preData + ' '+ this.operation;
  }

  appendNummer(nummer){
    if(nummer === '.' && this.aktData.includes('.'))
      return;
    this.aktData = this.aktData.toString()+ nummer.toString();
  }

  
  displayUpdate(){
    this.aktDataText.innerText = this.aktData; 
    this.preDataText.innerText = this.preData; 



  }
}
 
  const nummerBtn = document.querySelectorAll('[data-nummer]');
  const operationBtn = document.querySelectorAll('[data-operation]');
  const egalBtn = document.querySelector('[data-egal]');
  const loeschAllBtn = document.querySelector('[data-loesch-all]');
  const loeschBtn = document.querySelector('[data-loesch]');
  const preDataText = document.querySelector('[pre-data]');
  const aktDataText = document.querySelector('[akt-data]');

  const rechner = new Taschenrecher(preDataText, aktDataText);

  nummerBtn.forEach(button =>{
    button.addEventListener('click',() =>{
      rechner.appendNummer(button.innerText);
      rechner.displayUpdate();
    })
  })
  operationBtn.forEach(button =>{
    button.addEventListener('click',() =>{
      rechner.ausgewaehlteOperation(button.innerText);
      rechner.displayUpdate();
    })
  })

  egalBtn.addEventListener('click', ()=>{
    rechner.rechnen();
    rechner.displayUpdate();
  })
  
  loeschAllBtn.addEventListener('click', ()=>{
    rechner.clear();
    rechner.displayUpdate();
  })

  loeschBtn.addEventListener('click', ()=>{
    rechner.loeschen();
    rechner.displayUpdate();
  })
  