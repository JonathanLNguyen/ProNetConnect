function updateProfile() {
    
    preventDefault();
    

    var profilePictureUrl = document.getElementById('profilePictureUrl').value;
    var userName = document.getElementById('userName').value;
    var userOccupation = document.getElementById('userOccupation').value;
    var aboutText = document.getElementById('aboutText').value;
    var skillsText = document.getElementById('skillsText').value;
// Collecting Experience Entries
    var experienceEntries = [];
    document.querySelectorAll('.experience-entry').forEach(entry => {
        var jobTitle = entry.querySelector('[name="jobTitle[]"]').value;
        var jobYear = entry.querySelector('[name="jobYear[]"]').value;
        experienceEntries.push({ jobTitle, jobYear });
    });

    // Collecting License Entries
    var licenseEntries = [];
    document.querySelectorAll('.license-entry').forEach(entry => {
        var certName = entry.querySelector('[name="certName[]"]').value;
        var certInstitution = entry.querySelector('[name="certInstitution[]"]').value;
        licenseEntries.push({ certName, certInstitution });
    });

    // Console logging for now due to no database, will need to be changed
    console.log('Profile Picture URL:', profilePictureUrl);
    console.log('Name:', userName);
    console.log('Occupation:', userOccupation);
    console.log('About:', aboutText);
    console.log('Skills:', skillsText);
    console.log('Experience:', experienceEntries);
    console.log('Licenses:', licenseEntries);



    return false;
}
