/*function Division(a,b) {
    try {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        const resultado = a / b;
        console.log("El resultado de la división es: ", resultado);
    } catch (error) {
        console.error("Error: ", error.message);
    }finally {        
        console.log("}
        Operación de división finalizada.");
    }
}
//Division(10,2);
Division(10,0);
*/
/*function Usuario() {
  let usuario = null;
  console.log("Accediendo al nombre...");
  console.log(usuario.nombre);

  try {
    if (!usuario) {
      throw new Error("Debe cumplir con un objero");
    }
    console.log("Usuario encontrado: ", usuario.nombre);
  } catch (error) {
    console.error("Error: ", error.message);
  }
}
Usuario();*/

/* class Usuario {
    constructor(nombre,edad,email,password){
    if(!password || password.length < 6){
        throw new Error("La contraseña debe tener al menos 6 caracteres: ")
    }
    if(!nombre || nombre.length < 3){
        console.log("El nombre debe tener al menos 3 caracteres: ")
    }
    if(edad<18){
        throw new Error("La edad debe ser mayor a 18 años: ") 
    }
    if(!email.includes("@")){
        throw new Error("El email debe ser válido: ")
    }
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;     
    this. password = password || "123456";
}
}

const user = new Usuario("Juan", 25, "luisaguilar"); */

/* function Division(a,b){
    try{
        if (b===0){
            throw new Error ("No se puede dividir entre cero")
        }
 
    const resultado = a/b;
    console.log ("El resultado es",resultado)
} catch (error){
        console.error(`Error:${error.message}`)
    } finally{
    console.log("Terminar y cerrar cualquier proceso")
    }
}
Division (10,2);
Division (10,0); */

/* function Usuario (){
    try {
        let usuario = undefined
        console.log("Accediendo al nombre...")
        if (!usuario){
            throw new Error ("No se puede dejar el nombre vacio")
        }
    } catch (error){
        console.error(`Error:${error.message}`)
    }
        
    
       // let usuario = {nombre: "Luis"}
    
        
      //  console.log(usuario.nombre);
} 

Usuario() */

class ValidacionError extends Error {
    constructor(message){
        super(message);
        this.nombre=ValidacionError
        this.codigo =404;
    }
}

class Usuario{
    constructor(nombre,edad,email,password){
        if (!nombre || nombre.length<3){
            throw new ValidacionError ("El nombre debe tener almenos 3 caracteres")
        } 
        if(edad<18){
            throw new ValidacionError ("Debe ser mayor de edad")
        }
        if (!email.includes("@")){
            throw new ValidacionError ("Debe llevar formato de correo electronico")
        }
    
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.password = password;
    }
    setModificarPassword(newpassword){
    const validarUser = /[?/*,@$%]/
    if (newpassword.length<6){
        throw new ValidacionError ("Debe tener mas de 6 digitos")
    }
    if (!validarUser.test(newpassword)){
        throw new ValidacionError ("El password debe tener un caracter especial")
    }
    this.password = newpassword;
}
}
try {
    console.log("Creando usuario...")
    const user = new Usuario("Luis", 18, "aguilar281804@gmail.com", "124Z");
    user.setModificarPassword("ZXzzsz%")
    console.log("Usuario: ", user);
    console.log("Usuario creado correctamente")
} catch (error) {
    console.log("No se cumplen con un objeto:", error.message)
} finally {
    console.log("Proceso de creación de usuario finalizado")
}  
