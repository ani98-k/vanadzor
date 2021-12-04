function generatePartnerHtml(partner) {
  return `<div class="partner-box d-flex flex-column align-items-center justify-content-center">
    <a href="${partner.fields.link}"><img width="100" height="100" src="${media_url}${partner.fields.image}/"/></a>
    </div>`;
}

$(document).ready(function () {
  let partners = jQuery.parseJSON(partnerList);
  const width = document.documentElement.clientWidth;
  const partnerSection = $("#partners_section");
  let content = "";

  if (width <= 1024) {
    if (partners.length > 3) {
        for (key in partners.slice(0, 3)) {
          content += generatePartnerHtml(partners[key]);
        }
        $('#partner_all').css('display', 'block');
    }
  } else {

    for (key in partners) {
        content += generatePartnerHtml(partners[key]);
    }
  }
  partnerSection.html(content);
});