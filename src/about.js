const content = document.getElementById("content");

export function aboutPage() {
  content.innerHTML = "";
  const aboutHtml = `
      <div class="about">
        <h1>About Us</h1>
        <p>
          At [Restaurant Name], we believe good food starts with great
          ingredients. That’s why we source fresh, local produce and prepare
          each dish with care. Our menu blends traditional recipes with modern
          flavors, served in a cozy atmosphere that feels just like home.
        </p>
      </div>`;
  content.insertAdjacentHTML("afterbegin", aboutHtml);
}
