const content = document.getElementById("content");
import homeImg from "./images/image.png";
export function initialPageLoad() {
  content.innerHTML = "";
  const homeHtml = `
  <div class="home">
        <div class="text-box">
          <h1>A healthy meal delivered to your door, every single day</h1>
          <p>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs!
          </p>
        </div>
        <div class="image-box">
          <img src="${homeImg}" alt="Restaurant-Home-Page" />
        </div>
      </div>
    </div>
  `;
  content.insertAdjacentHTML("afterbegin", homeHtml);
}
