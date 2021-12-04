$(".read-more").on("click", openReviewModal);

function generateReviewCard(review){
    const html=`<div class="card review-card">
            <div class="card-body">
                <div class="review-header">
                ${review.fields.image ?
                    `<img class="avatar" src="${media_url}${review.fields.image}/" width="90" height="90" />` :
                    `<div class="avatar"></div>`
                }
                    <div>
                        <p>${review.fields.full_name}</p>
                        <span>${review.fields.position}</span>
                    </div>
                </div>
                <span class="card-text">
                   ${review.fields.comment.slice(0,255)}...
                    <span class="read-more" onclick="openReviewModal.call(this)" id="${review.pk}">${readMore}»</span>
                </span>
            </div>
        </div>`
    return html
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
}

$(document).ready(function(){
    let reviews = jQuery.parseJSON(reviewsList);
    if(reviews.length > 2){
        var timer = setInterval(function() {
            const width=document.documentElement.clientWidth;
            let reviewCount = width < 1200 ? 1 : 2;
            const reviewSection = width < 1200 ? $('#review_section_mobile') : $('#review_section');
            let content='';

            reviews = shuffle(reviews)
            const randomTwoReview = reviews.slice(0,reviewCount)

            for (key in randomTwoReview){
                content += generateReviewCard(randomTwoReview[key])
            }

            reviewSection.html(content)

        }, 10000);
    }
});

function openReviewModal() {
    const pk = $(this).attr('id');
    $.ajax({
        type: 'GET',
        url: getReviewUrl.replace('0', pk),
        dataType: 'json',
        success: function(response){
            $('#reviewModal').html(response['modal'])
            $('#reviewModal').modal()
        },
        error: function(rs, e){
            console.log(rs)
        }
    });
}