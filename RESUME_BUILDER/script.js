document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const achievements = document.getElementById('achievements').value;

    // Convert the skills text into an array of items
    const skillsArray = skills.split('\n').map(skill => skill.trim()).filter(skill => skill !== '');

    // Generate a list of skills with bullet points
    const skillsList = skillsArray.map(skill => `<li>${skill}</li>`).join('');

    const resumeOutput = `
        <h2>Generated Resume</h2>
        <div>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
        <div>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Education</h3>
            <p>${education}</p>
        </div>
        <div>
            <h3>Skills</h3>
            <ul>${skillsList}</ul>
            <h3>Achievements</h3>
            <p>${achievements}</p>
        </div>
    `;

    document.getElementById('resume-output').innerHTML = resumeOutput;
});
