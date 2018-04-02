(function () {

    var streaming = false,
        video = document.querySelector('#video'),
        canvas = document.querySelector('#canvas'),
        photo = document.querySelector('#photo'),
        startbutton = document.querySelector('#startbutton'),
        width = 200,//hay un limite en el tamaño, si no no se puede enviar
        height = 0;

    navigator.getMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

    navigator.getMedia(
        {
            video: true,
            audio: false
        },
        function (stream) {
            if (navigator.mozGetUserMedia) {
                video.mozSrcObject = stream;
            } else {
                var vendorURL = window.URL || window.webkitURL;
                video.src = vendorURL.createObjectURL(stream);
            }
            video.play();
        },
        function (err) {
            console.log("An error occured! " + err);
        }
    );

    video.addEventListener('canplay', function (ev) {
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    function takepicture() {
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(video, 0, 0, width, height);
        var imagen = canvas.toDataURL('image/png');
        console.log('con esta linea convertimos a base64');
        console.log(imagen);
        sendImage(imagen)
        //sendImage('Hola mundo! Estoy aqui');
        photo.setAttribute('src', imagen);
    }

    // function sendImage(texto) {
    //     $.ajax(
    //         {
    //             type: 'POST',
    //             url: 'http://localhost:5000/api/images',
    //             data: JSON.stringify([{text: texto}]),
    //             contentType: 'application/json',
    //             dataType: 'json'
    //         }
    //     )
    //         .then(response => {
    //             console.log('Esto es lo que quiero mostrar', response);
    //         })
    //         .catch(err => {
    //             console.log(err.text);
    //         })
    // }
    function sendImage(imagen) {
        $.ajax(
            {
                type: 'POST',
                url: 'http://localhost:5000/api/images',
                data: JSON.stringify({foto : imagen}),
                contentType: 'application/json;chartset=utf-8',
                dataType: 'json'
            }
        )
            .then(response => {
                console.log('Esto es lo que quiero mostrar', response);
            })
            .catch(err => {
                console.log(err.text);
            })
    }

    startbutton.addEventListener('click', function (ev) {
        takepicture();
        ev.preventDefault();
    }, false);

})()