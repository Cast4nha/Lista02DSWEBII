// função sleep
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
   
  // chamando a função sleep com pausa de 2 segundos
  const rotina_com_pausa = async () => {
    await sleep(2000)
    console.log('Pausa de 2 segundos')
  }
   
  console.log("Olá Mundo")
  rotina_com_pausa()