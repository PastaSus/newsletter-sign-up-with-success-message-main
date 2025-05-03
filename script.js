"use strict";

// goals: use custom, use constraint validation api, use 3rd party

// this is using custom
// Approach 1: wrap your entire file in an event listener
document.addEventListener("DOMContentLoaded", function () {
  const newsletterMain = document.querySelector(".newsletter__main");
  const newsletterVerification = document.querySelector(
    ".newsletter__verification"
  );

  // const subscribeBtn = document.querySelector(".newsletter__subscribe");
  const dismissBtn = document.querySelector(".newsletter__dismiss");

  const form = document.querySelector(".newsletter__form");
  const newsletterEmail = document.querySelector(
    ".newsletter__confirmation-email"
  );

  const emailInput = document.querySelector(".newsletter__input");

  const errorMsg = document.querySelector(".error-message");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
      emailInput.classList.add("invalid");

      errorMsg.textContent = "Email is required";
    } else if (!isValidEmail(email)) {
      emailInput.classList.add("invalid");

      errorMsg.textContent = "Valid email required";
    } else {
      emailInput.classList.remove("invalid");
      emailInput.classList.add("valid");

      errorMsg.textContent = "";
      newsletterEmail.textContent = emailInput.value;

      newsletterMain.style.display = "none";
      newsletterVerification.style.display = "grid";
    }
  });

  dismissBtn.addEventListener("click", (e) => {
    e.preventDefault();

    newsletterMain.style.display = "grid";

    newsletterVerification.style.display = "none";
  });
});
