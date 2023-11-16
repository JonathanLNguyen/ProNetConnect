document.addEventListener('DOMContentLoaded', function() {
    // Initialize Firebase
    // This assumes you have already added Firebase configuration and initialized Firebase
    const db = firebase.firestore();

    // Fetch group data using the groupId from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const groupId = urlParams.get('groupId');

    // Fetch group data from Firebase Firestore
    db.collection("groups").doc(groupId).get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            document.getElementById('groupName').textContent = doc.data().name || 'No name provided';
            document.getElementById('groupDescription').textContent = doc.data().description || 'No description provided';
            document.getElementById('groupPrivacy').textContent = doc.data().privacy || 'Privacy not set';
            document.getElementById('groupLocation').textContent = doc.data().location || 'No location provided';
            document.getElementById('groupRules').textContent = doc.data().rules || 'No rules specified';
            document.getElementById('groupIndustry').textContent = doc.data().industry || 'No industry specified';
            document.getElementById('memberCount').textContent = doc.data().memberCount || '0'; // Update with actual member count if available
            // Handle group picture if available
            // ...
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    // Post submission handler (keep this if you want to handle post submissions)
    document.getElementById('createPostForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const postContent = document.getElementById('postContent').value;
        
        console.log('New Post:', postContent);
        
        // TODO: Handle the post submission, potentially sending it to Firebase
        document.getElementById('postContent').value = '';

        // Example of adding the post to the DOM
        // let postsList = document.getElementById('postsList');
        // let newPost = document.createElement('div');
        // newPost.textContent = postContent;
        // postsList.appendChild(newPost);
    });
});
