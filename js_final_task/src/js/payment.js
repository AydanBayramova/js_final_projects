function toggleCheckbox(checkboxId) {
    var checkboxes = document.querySelectorAll('input[name="payment"]');
    checkboxes.forEach(function(checkbox) {
      if (checkbox.id === checkboxId) {
        if (checkbox.checked) {
    
          checkboxes.forEach(function(otherCheckbox) {
            if (otherCheckbox.id !== checkboxId) {
              otherCheckbox.checked = false;
            }
          });
        }
      }
    });
  }
  