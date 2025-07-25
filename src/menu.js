const content = document.getElementById("content");
import menu1 from "./images/menu1.png";
import menu2 from "./images/menu2.png";
import menu3 from "./images/menu3.png";
export function MenuPage() {
  content.innerHTML = "";
  const menuHtml = `
<div class="menus">
        <div class="menu">
          <div class="menu-img">
            <img src="${menu1}" alt="Greek Salad" />
          </div>
          <article class="menu-info">
            <div class="menu-head">
              <h4>Greek Salad</h4>
              <span>$10.65</span>
            </div>
            <p>
              Greek salad is a refreshing Mediterranean dish made with juicy
              tomatoes, crisp cucumbers, tangy olives, sharp red onions, and
              creamy feta cheese
            </p>
          </article>
        </div>

        <div class="menu">
          <div class="menu-img">
            <img src="${menu2}" alt="Greek Salad" />
          </div>
          <article class="menu-info">
            <div class="menu-head">
              <h4>Greek Salad</h4>
              <span>$10.65</span>
            </div>
            <p>
              Greek salad is a refreshing Mediterranean dish made with juicy
              tomatoes, crisp cucumbers, tangy olives, sharp red onions, and
              creamy feta cheese
            </p>
          </article>
        </div>

        <div class="menu">
          <div class="menu-img">
            <img src="${menu3}" alt="Greek Salad" />
          </div>
          <article class="menu-info">
            <div class="menu-head">
              <h4>Greek Salad</h4>
              <span>$10.65</span>
            </div>
            <p>
              Greek salad is a refreshing Mediterranean dish made with juicy
              tomatoes, crisp cucumbers, tangy olives, sharp red onions, and
              creamy feta cheese
            </p>
          </article>
        </div>
      </div>
  `;
  content.insertAdjacentHTML("afterbegin", menuHtml);
}
