function Datos () {
    let Escribir = [
    { nombre : "Luis", edad : "19" , curp : "A1"
    },
    { nombre : "Pedro" , edad : "18", curp : "A2"
    },
    { nombre : "Jesus", edad : "25" , curp : "A3"
    },
    { nombre : "Brenda", edad : "18" , curp : "A4"
    },
    { nombre : "Jose", edad : "27" , curp : "A5"
    },
]
Escribir.map ((Esc)=>{console.log(`Mi nombre es ${Esc.nombre} y tengo ${Esc.edad} años y mi curp es ${Esc.curp}`);
})

}
Datos();