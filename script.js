function showInfo(stage) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');

    // Content for each stage
    const info = {
        build: "This is the Build stage where code is compiled and prepared for testing.",
        test: "This is the Test stage where the code is tested for bugs and quality.",
        deploy: "This is the Deploy stage where the code is released to production.",
        review: "This is the Review stage where the deployment is verified and approved."
    };

    // Set the content of the popup and display it
    popupContent.innerText = info[stage];
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
