// Initialize EmailJS with your new public key
(function () {
  emailjs.init("_HLVZ4f7YUsUaAr3J"); // ✅ Your updated public key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inquiryForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_dpevk2q", "template_0001", form)
      .then(function () {
        alert("✅ Your request has been sent!");
        form.reset();

        // Accessibility fix: blur active element before closing modal
        document.activeElement.blur();

        const modalEl = document.getElementById("inquiryModal");
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
      }, function (error) {
        alert("❌ Failed to send request. Please try again.");
        console.error("EmailJS error:", error);
      });
  });
});
