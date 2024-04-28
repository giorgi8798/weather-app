const main = document.querySelector(".main");
const date1 = new Date();
let x = date1.getDay();

const weekDays = ["კვ.", "ორ.", "სამ.", "ოთხ.", "ხუთ", "პარ.", "შაბ."];

function fun1(data) {
  data.forEach((item) => {
    const div1 = document.createElement("div");
    const visual = item.icon.split("");
    let y = visual
      .map((x) => {
        if (x === "-") {
          x = "_";
        }
        return x;
      })
      .join("");
    if (y === "rain") {
      y = y + "y";
    }
    div1.classList.add("days");
    div1.innerHTML = `
      <span class="week">${weekDays[x]}</span>
      <div>
      <span class="material-symbols-outlined">
      ${y}
      </span>
        <span>${((item.tempmin - 32) * (5 / 9)).toFixed(0)} °</span>
      </div>
      <div></div>
      <h3>${((item.temp - 32) * (5 / 9)).toFixed(0)} °</h3>
    `;
    main.appendChild(div1);

    if (x >= 6) {
      x = 0;
    } else {
      x += 1;
    }

    console.log(y);
  });
}

console.dir(main);

async function api() {
  const country = "GE";
  const city = "Tbilisi";
  const key = "27HC52E5DDKTJ54EQBTN7SY8Q";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?key=${key}`;

  try {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fun1(data.days);
      });
  } catch (error) {
    console.error("es aris shecdoma", error);
  }
}

api();
