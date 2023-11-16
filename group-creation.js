document.getElementById('createGroupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Retrieve values from the form fields
    const groupName = document.getElementById('groupName').value;
    const groupDescription = document.getElementById('groupDescription').value;
    const groupPrivacy = document.querySelector('input[name="groupPrivacy"]:checked').value;
    const industry = document.getElementById('industry').value; // For multiple selections, further processing might be needed
    const location = document.getElementById('location').value;
    const rules = document.getElementById('rules').value;
    const groupPicture = document.getElementById('groupPicture').files[0]; // Handle file uploads separately

    // Console log for debugging purposes
    console.log('Group Name:', groupName);
    console.log('Description:', groupDescription);
    console.log('Group Privacy:', groupPrivacy);
    console.log('Industry:', industry);
    console.log('Location:', location);
    console.log('Rules:', rules);
    console.log('Group Picture:', groupPicture ? groupPicture.name : 'No file chosen');

    // TODO: Store these values in Firebase
    // TODO: Redirect to the group page with the new group ID
});
