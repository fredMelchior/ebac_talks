AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00")
const timeStampEvento = dataEvento.getTime()

const contaTempo = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const ateOevento = timeStampEvento - timeStampAtual

    const diasAteOevento = Math.floor(ateOevento / (1000 * 60 * 60 * 24))
    const horasAteOevento = Math.floor((ateOevento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosAteOevento = Math.floor((ateOevento % (1000 * 60 * 60)) / (1000 * 60))
    const segundosAteOevento = Math.floor((ateOevento % (1000 * 60)) / (1000))

    document.getElementById('contador').innerHTML = `${diasAteOevento}d ${horasAteOevento}h ${minutosAteOevento}m ${segundosAteOevento}s`

    if(ateOevento < 0){
        clearInterval(contaTempo)
        document.getElementById('contador').innerHTML = '----Evento expirado!----'
    }

}, 1000)
