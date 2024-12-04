document.getElementById('resume-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const about = document.getElementById('about').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const linkedin = document.getElementById('linkedin').value;
  const profilePicture = document.getElementById('profile-picture').files[0];

  // Display the resume preview
  document.getElementById('output-name').textContent = name;
  document.getElementById('output-email').textContent = email;
  document.getElementById('output-phone').textContent = phone;
  document.getElementById('output-about').textContent = about;
  document.getElementById('output-education').textContent = education;
  document.getElementById('output-experience').textContent = experience;
  const linkedinLink = document.getElementById('output-linkedin');
  linkedinLink.textContent = linkedin;
  linkedinLink.href = linkedin;

  // Display profile picture
  const imgElement = document.getElementById('profile-img');
  if (profilePicture) {
      const reader = new FileReader();
      reader.onload = function (e) {
          imgElement.src = e.target.result;
          imgElement.style.display = 'block'; // Show image
      };
      reader.readAsDataURL(profilePicture);
  }

  // Show the output container
  document.getElementById('output-container').style.display = 'block';
});

// Generate and download the resume as PDF
document.getElementById('download-pdf').addEventListener('click', function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Get content
  const name = document.getElementById('output-name').textContent;
  const email = document.getElementById('output-email').textContent;
  const phone = document.getElementById('output-phone').textContent;
  const about = document.getElementById('output-about').textContent;
  const education = document.getElementById('output-education').textContent;
  const experience = document.getElementById('output-experience').textContent;
  const linkedin = document.getElementById('output-linkedin').textContent;

  // Add content to PDF
  doc.text(`Name: ${name}`, 10, 10);
  doc.text(`Email: ${email}`, 10, 20);
  doc.text(`Phone: ${phone}`, 10, 30);
  doc.text('About:', 10, 40);
  doc.text(about, 10, 50, { maxWidth: 190 });
  doc.text('Education:', 10, 70);
  doc.text(education, 10, 80, { maxWidth: 190 });
  doc.text('Experience:', 10, 100);
  doc.text(experience, 10, 110, { maxWidth: 190 });
  doc.text(`LinkedIn: ${linkedin}`, 10, 130);

  // Save PDF
  doc.save('resume.pdf');
});
