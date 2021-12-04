function load_events() {
    const sentinel = document.getElementById("footer");
  
    let observer = new IntersectionObserver(async (entries) => {
      entry = entries[0];
  
      if (entry.intersectionRatio > 0 && !end) {
        $("#loading").css("display", "inline-block");
        $.ajax({
          type: "GET",
          url: eventUrl,
          data: {
            page,
          },
          dataType: "json",
          success: function (response) {
              $("#event_section").append(response["events"]);
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
  
  document.addEventListener("DOMContentLoaded", () => load_events());