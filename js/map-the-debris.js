function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  let op = [];

  for(let i=0; i <= arr.length -1; i++){
    
    const a = arr[i].avgAlt + earthRadius;
    const a_cubed = Math.pow(a,3);
    const dPi = 2 * Math.PI;
    const orbitalPeriod = Math.round(dPi * (Math.sqrt((a_cubed/GM))))
    
    let opObj = {};
    opObj.name = arr[i].name;
    opObj.orbitalPeriod = orbitalPeriod;

    op.push(opObj)
  }

  console.log(op)


  return op;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
// should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
//should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].