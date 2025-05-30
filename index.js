 function calculateAge() {
      const dobInput = document.getElementById("dob").value;
      if (!dobInput) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
      }

      const dob = new Date(dobInput);
      const today = new Date();

      if (dob > today) {
        document.getElementById("result").innerText = "Date of birth cannot be in the future.";
        return;
      }

      let years = today.getFullYear() - dob.getFullYear();
      let months = today.getMonth() - dob.getMonth();
      let days = today.getDate() - dob.getDate();

      if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      document.getElementById("result").innerText = 
        `Your age is ${years} year(s), ${months} month(s), and ${days} day(s).`;
    }