let displayItems = [
  {
    previewImage:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cat.jpeg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cooking couple shoot portofilio(1).jpg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "bali-kelingking-beach-plastic-removal-drive.key",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "NextByk InvestorPitch 2021.ppt",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "interns-performance-report-june-2021.key",
  },
];
let currentImageIndex = 0;
let totalItems = displayItems.length;

const applyBackgroundColor = (index) =>
  document.getElementById(`${index}`).classList.add("selected");
const removeBackgroundColor = (index) =>
  document.getElementById(`${index}`).classList.remove("selected");

const displayImage = () => {
  let imagePhoto = document.querySelector("#image-photo");
  imagePhoto.src = displayItems[currentImageIndex].previewImage;
  imagePhoto.alt = displayItems[currentImageIndex].title;
  let imageTitle = document.querySelector("#image-title");
  imageTitle.innerHTML = displayItems[currentImageIndex].title;
};

displayItems.forEach((item, index) => {
  let element = document.createElement("div");
  element.classList.add("sidebar-item");
  element.id = index;
  let stringLength = item.title.length;
  element.innerHTML = `
    <img
      src="${item.previewImage}"
      alt="${item.title}"
      class="image-preview"
    />
    <p>${item.title.slice(0, Math.max(0,stringLength-15))}</p><p>${item.title.slice(-15)}</p>
    `;

  element.onclick = () => {
    removeBackgroundColor(currentImageIndex);
    currentImageIndex = index;
    displayImage();
    applyBackgroundColor(currentImageIndex);
  };

  let parent = document.querySelector(".sidebar");
  parent.appendChild(element);

  if (index === 0) {
    displayImage();
    applyBackgroundColor(currentImageIndex);
  }
});

document.onkeydown = function (event) {
  removeBackgroundColor(currentImageIndex);

  var e = event || window.event;

  if (e.keyCode === 38) {
    //LEFT KEY
    currentImageIndex = (currentImageIndex - 1 + totalItems) % totalItems;
  } else if (e.keyCode === 40) {
    //RIGHT KEY
    currentImageIndex = (currentImageIndex + 1 + totalItems) % totalItems;
  }

  displayImage();
  applyBackgroundColor(currentImageIndex);
};
