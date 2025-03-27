
document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.querySelector(".like-btn");
    const heartIcon = likeButton.querySelector("i");
    const postImage = document.querySelector(".post-img");
    const heartAnimation = document.querySelector(".heart-animation");

    function toggleLike() {
        heartIcon.classList.toggle("fa-regular");
        heartIcon.classList.toggle("fa-solid");
        heartIcon.classList.toggle("liked");

    }

    function showHeartAnimation() {
        if (!heartAnimation) return;
        heartAnimation.style.opacity = 1;
        heartAnimation.style.transform = "scale(1.2)";

        setTimeout(() => {
            heartAnimation.style.opacity = 0;
            heartAnimation.style.transform = "scale(1)";
        }, 600);
    }

    if (likeButton) {
        likeButton.addEventListener("click", toggleLike);
    }

    if (postImage) {
        postImage.addEventListener("dblclick", function () {
            toggleLike();
            showHeartAnimation()
        });
    }
});