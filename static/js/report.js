function load_donations() {
    const sentinel = document.getElementById("footer");
  
    let observer = new IntersectionObserver(async (entries) => {
      entry = entries[0];

      if (entry.intersectionRatio > 0 && !end) {
        $("#loading").css("display", "inline-block");
        $.ajax({
          type: "GET",
          url: reportUrl,
          data: {
            page,
          },
          dataType: "json",
          success: function (response) {
              $("#donations_section").append(response["donations"]);
              page++;
          },
          error: function (rs, e) {
            end = true;
          },
          complete: function () {
            $("#loading").css("display", "none");
          }
        });
      }
    });
    observer.observe(sentinel);
  }
  
  document.addEventListener("DOMContentLoaded", () => load_donations());