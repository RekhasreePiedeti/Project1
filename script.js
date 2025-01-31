document.addEventListener("DOMContentLoaded", function() {
    // Attach the login function to the form submit event
    document.getElementById("loginForm").addEventListener("submit", login);
});

async function login(event) {
    event.preventDefault(); // Prevents default form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        const response = await fetch('users.json', { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.users || !Array.isArray(data.users)) {
            throw new Error("Invalid user data format.");
        }

        const user = data.users.find(u => u.username === username && u.password === password);

        if (user) {
            switch (user.role) {
                case 'admin':
                    window.location.href = "/Admin_page.html";
                    break;
                case 'creator':
                    window.location.href = "/Creator_page.html";
                    break;
                case 'reviewer':
                    window.location.href = "/Reviewer_page1.html";
                    break;
                case 'approver':
                    window.location.href = "/approver1.html";
                    break;
                default:
                    alert('Unknown role!');
                    return;
            }
        } else {
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error('Error loading user data:', error);
        alert('There was an error processing the login.');
    }
}
