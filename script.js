const main = document.querySelector(".main");

const data = [
  {
    day: "დღეს",
    temp: "29",
    temp2: "15",
    weather: "mziani",
  },
  {
    day: "ორ.",
    temp: "29",
    temp2: "15",
    weather: "mziani",
  },
  {
    day: "სამ.",
    temp: "29",
    temp2: "15",
    weather: "mziani",
  },
  {
    day: "ოთხ.",
    temp: "29",
    temp2: "15",
    weather: "mziani",
  },
  {
    day: "ხუთ.",
    temp: "29",
    temp2: "15",
    weather: "mziani",
  },
  {
    day: "პარ.",
    temp: "29",
    temp2: "15",
    weather: "mziani",
  },
  {
    day: "შაბ.",
    temp: "29",
    temp2: "15",
    weather: "mziani",
  },
];

data.forEach((item) => {
  const div1 = document.createElement("div");
  div1.classList.add("days");
  div1.innerHTML = `
    <span class="week">${item.day}</span>
    <div>
      <img src="" alt="" />
      <span>${item.temp2}</span>
    </div>
    <div></div>
    <h3>${item.temp}</h3>
  `;
  main.appendChild(div1);
});

console.dir(main);
