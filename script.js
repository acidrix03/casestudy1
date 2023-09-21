document.addEventListener('DOMContentLoaded', function () {
    const profileImage = document.getElementById('profile-image');

    if (profileImage) {
        profileImage.addEventListener('click', function () {
            const enlargedImage = window.open(profileImage.src, '_blank');
            if (enlargedImage) {
                enlargedImage.focus();
            }
        });
    }
});