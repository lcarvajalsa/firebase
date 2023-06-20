function ingresarLogin(){

    let documento = document.getElementById('usuario').value;
    let password  = document.getElementById('password').value;

    firebase.database().ref('Usuarios/'+documento+0).once('value').then(
        function (result) {
            if(result){
                let title = result?.val()?.password;
                if(password == title){
                    document.getElementById('Ingreso').textContent='BIENVENIDO.';
                }else{
                    alert('Datos erroneos');
                }
            }else{
                alert('Datos erroneos desde la coleccion');
            }
            
        }
    )
}