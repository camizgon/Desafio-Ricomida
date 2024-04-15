const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$("#enviarCorreo").click(function () {
  alert("  “El correo fue enviado correctamente");
});

$("h2").on("dblclick", function () {
  $(this).css({ color: "red" });
});

$(".card-title").click(function () {
  $(".card-text").toggle();
});
