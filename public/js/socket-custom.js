const socket = io();

        // Escuchar información
        socket.on('connect', function(){
            console.log('Conectado al servidor')
        });

        socket.on('disconnect', function() {
            console.log('Perdimos conexion con el servidor')
        })

        // Enviar información
        socket.emit('enviarMensaje', {
            usuario: 'Fernando',
            mensaje: 'Hola Mundo'        
        }, function(resp)  {
            console.log(resp)
        })

        //Escuchar informacion
        socket.on('enviarMensaje', function(data){
            console.log('Servidor: ', data)
        })