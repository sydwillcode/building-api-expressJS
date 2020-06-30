//     $('#chirp-submit').click(function () {
    //         $.get("http://localhost:3000/api/chirps", data => {
    //             $.ajaxSetup(
    //                 {
    //                     headers: {
    //                         Accept: "application/json, text/plain, */*",
    //                         "content-type": "application/json"
    //                     }
    //                 }
    //             )
    //             $.ajax(
    //                 {
    //                     type: "Post",
    //                     url: "http://localhost:3000/api/chirps",
    //                     data: JSON.stringify(
    //                         {
    //                             username: $('#input-username').val(),
    //                             message: $('#input-chirp').val()
    //                         }
    //                     )
    //                 }

    //             )
    //         })


    //         // let username = $('#input-username').val();
    //         // let chirp = $('#input-chirp').val();
    //         // const data = {
    //         //     username: username,
    //         //     chirp: chirp
    //         // };

    //     })

    // $('#testdiv').load('test.html', (response, status, xhr) => {
    //      if (status == "success"){
    //          alert('All good!')
    //      } else if (status == 'error'){
    //          alert("Error: "+xhr.statusText)
    //      }
    // });

    // $.get('test.html', data => {
    //     $('#testdiv').html(data)
    // })

    // $.getJSON('../chirps.json', (data) => {
    //     $.each(data, (i, user) =>{
    //         $('ul#users').append('<li>'+ user.username + '</li>')
    //     })
    // })


    // $.ajax({
    //     method: 'GET', 
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     dataType: 'json'
    // }).done((data) => {
    //     console.log(data);
    //     $.map(data, (post, i) => {
    //         $('#testdiv').append('<h6>'+post.title+'<h6>', '<p>' + post.body+ '</p>');
    //     })
    // })

    // $.ajax({
    //     method: 'POST', 
    //     url: 'http://localhost:3000/api/chirps',
    //     dataType: 'json'
    // }).done((data) => {
    //     let username = $('#input-username').val();
    //     let chirp = $('#input-chirp').val();
    //     const data = {
    //                     username: username,
    //                     chirp: chirp
    //                 };
    //     })
    // })