document.addEventListener("DOMContentLoaded", function () {
    const patientTab = document.getElementById("patientTab");
    const providerTab = document.getElementById("providerTab");
    const patientForm = document.getElementById("patient");
    const providerForm = document.getElementById("provider");
  
    function showTab(tabName) {
      // Remove active class from both tabs
      patientTab.classList.remove("active");
      providerTab.classList.remove("active");
  
      // Hide both forms
      patientForm.style.display = "none";
      providerForm.style.display = "none";
  
      // Add active class to clicked tab
      if (tabName === "patient") {
        patientTab.classList.add("active");
        patientForm.style.display = "block";
      } else if (tabName === "provider") {
        providerTab.classList.add("active");
        providerForm.style.display = "block";
      }
    }
  
    // Attach the event listeners to the tabs
    patientTab.addEventListener("click", function() {
      showTab("patient");
    });
  
    providerTab.addEventListener("click", function() {
      showTab("provider");
    });
  
    // Set default active tab (patient)
    showTab("patient");
  });
  