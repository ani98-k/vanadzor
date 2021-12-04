//handle change tabs
$(document).ready(function () {
  $("#projectsTab a").click(function (e) {
    e.preventDefault();
    end = false;
  });
});

//filter by category
$(document).on("click", "#category", function (event) {
  event.preventDefault();
  const categoryId = $(this).attr("value");
  const isActiveProjectsTab = $("#active").attr("class").includes("active");
  $(".category-item.active").removeClass("active");
  $(this).addClass("active");

  end = false;

  $.ajax({
    type: "GET",
    url: projectListUrl,
    data: { category_id: categoryId, status: isActiveProjectsTab ? "A" : "F" },
    dataType: "json",
    success: function (response) {
      if (isActiveProjectsTab) {
        $("#active_projects_scroll").html(response["active_projects"]);
        $("#finished_projects_scroll").html("");
        activeTabPage = 1;
        finishedTabPage = 0;
      } else {
        $("#finished_projects_scroll").html(response["finished_projects"]);
        $("#active_projects_scroll").html("");
        activeTabPage = 0;
        finishedTabPage = 1;
      }
    },
    error: function (rs, e) {
      console.log(rs);
    },
  });
});


function load_projects() {
  const sentinel = document.getElementById("footer");

  let observer = new IntersectionObserver(async (entries) => {
    const categoryId = document
      .getElementsByClassName("category-item active")[0]
      .getAttribute("value");
    const isActiveProjectsTab = $("#active").attr("class").includes("active");

    entry = entries[0];

    if (entry.intersectionRatio > 0 && !end) {

      $("#loading").css("display", "inline-block");

      $.ajax({
        type: "GET",
        url: projectListUrl,
        data: {
          page: isActiveProjectsTab ? ++activeTabPage : ++finishedTabPage,
          category_id: categoryId,
          status: isActiveProjectsTab ? "A" : "F",
        },
        dataType: "json",
        success: function (response) {
            isActiveProjectsTab
            ? $("#active_projects_scroll").append(response["active_projects"])
            : $("#finished_projects_scroll").append(response["finished_projects"]);
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

document.addEventListener("DOMContentLoaded", () => load_projects());
