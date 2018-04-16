function check() {


        window.location.href="http://localhost:8080"


}

// google login//

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var user_name = profile.getName();
    localStorage.setItem('user_name',user_name);
    alert(localStorage.getItem('user_name',user_name));
    window.location.href="index.html";
    alert(user_name);
}

function onLoad() {
    gapi.load('auth2,signin2', function() {
        var auth2 = gapi.auth2.init();
        auth2.then(function() {
            // Current values
            var isSignedIn = auth2.isSignedIn.get();
            var currentUser = auth2.currentUser.get();

            if (!isSignedIn) {
                // Rendering g-signin2 button.
                gapi.signin2.render('google-signin-button', {
                    'onsuccess': 'onSignIn'
                });
                window.location.href="index.html";
            }
        });
    });
}

function logout() {
    window.location.href="home.html";
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

