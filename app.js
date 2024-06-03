const contarVotos=[0,0,0,0,0];
var votos=JSON.parse(localStorage.getItem("votos"));

if(votos){
    votos.map(voto=>{
        contarVotos[voto-1]++

    });
}else{
    localStorage.setItem("votos", JSON.stringify([]))
}


const data = {

    labels: [
      'Ecologia',
      'Ingles',
      'Fisica',
      'Calculo',
      'Modulo'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: contarVotos,
      backgroundColor: [
        'rgb(157, 236, 157)',
        'pink',
        'rgb(125, 125, 230)',
        'rgb(207, 207, 125)',
        'rgb(83, 78, 78)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };
  const chart=new Chart(document.querySelector("#promedio"),config);

  const votar=(materia)=>{
    if(materia!=null){
        votos=JSON.parse(localStorage.getItem("votos"));
        votos.push(materia)
        localStorage.setItem("votos",JSON.stringify(votos))
        contarVotos[materia-1]++
    }
    chart.update()
  }