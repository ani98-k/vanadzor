
$(document).on('click', '#project_like', function(event){
    event.preventDefault();
    const pk = $(this).attr('value');
    const csrf_token= getCookie('csrftoken')
    $.ajax({
        type: 'POST',
        url: projectLikeUrl,
        data: {'id': pk, 'csrfmiddlewaretoken': csrf_token},
        dataType: 'json',
        success: function(response){
            const project_like_sections=$(`[id='project_like_section${pk}']`)

            for (let i=0; i<project_like_sections.length; i++) {
                project_like_sections[i].innerHTML=response['form']
            }
        },
        error: function(rs, e){
            console.log(rs)
        }
    });
});

$(document).on('click', '#event_like', function(event){
    event.preventDefault();
    const pk = $(this).attr('value');
    const csrf_token= getCookie('csrftoken')
    $.ajax({
        type: 'POST',
        url: eventLikeUrl,
        data: {'id': pk, 'csrfmiddlewaretoken': csrf_token},
        dataType: 'json',
        success: function(response){
            $(`#event_like_section${pk}`)[0].innerHTML=response['form']
        },
        error: function(rs, e){
            console.log(rs)
        }
    });
});


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
