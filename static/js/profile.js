//handle change tabs
$(document).ready(function () {
    $("#profileTabs a").click(function (e) {
      e.preventDefault();
      end = false;
    });
  });

function load_projects() {
  const sentinel = document.getElementById("bottom");

  let observer = new IntersectionObserver(async (entries) => {
    const data = whichTabActive();
    entry = entries[0];

    if (entry.intersectionRatio > 0 && !end) {
      $("#loading").css("display", "inline-block");

      $.ajax({
        type: "GET",
        url: profileUrl,
        data: { active: data.active, page: ++pageObj[data.page] },
        dataType: "json",
        success: function (response) {
          if ("favorite_events" in response)
            $("#events_scroll").append(response["favorite_events"]);
          else if ("favorite_projects" in response)
            $("#projects_scroll").append(response["favorite_projects"]);
          else if ("donations" in response)
          $("#donations_scroll").append(response["donations"]);
        },
        error: function (rs, e) {
          end = true;
        },
        complete: function () {
          $("#loading").css("display", "none");
        },
      });
    }
  });
  observer.observe(sentinel);
}

function whichTabActive() {
  switch (true) {
    case $("#projects").attr("class").includes("active"):
      return { page: "projectsPage", active: "favorite_projects" };

    case $("#events").attr("class").includes("active"):
      return { page: "eventsPage", active: "favorite_events" };

    case $("#donations").attr("class").includes("active"):
      return { page: "donationsPage", active: "donations" };
  }
}

document.addEventListener("DOMContentLoaded", () => load_projects());
