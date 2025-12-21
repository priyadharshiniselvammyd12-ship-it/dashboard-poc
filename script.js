const addChartBtn = document.getElementById("addChartBtn");
const widgetArea = document.getElementById("widgetArea");
let count = 1;
addChartBtn.addEventListener("click", () => {
  const widget = document.createElement("div");
  widget.className = "widget";
  widget.innerHTML = `
    <h3>Sales Chart</h3>
    <canvas id="chart${count}"></canvas>
    <button class="removeBtn">Remove</button>
  `;
  widgetArea.appendChild(widget);
  const ctx = document.getElementById(`chart${count}`);
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      datasets: [{
        label: "Sales",
        data: [10, 15, 12, 18],
        backgroundColor: "#38bdf8",
        barThickness: 25  
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 25
        }
      }
    }
  });
  widget.querySelector(".removeBtn").onclick = () => widget.remove();
  count++;
});
function addKPI() {
  const widget = document.createElement("div");
  widget.className = "widget kpi";
  widget.innerHTML = `
    <h4>Total Orders</h4>
    <h2>125</h2>
    <button class="removeBtn">Remove</button>
  `;
  widgetArea.appendChild(widget);
  widget.querySelector(".removeBtn").onclick = () => widget.remove();
}



