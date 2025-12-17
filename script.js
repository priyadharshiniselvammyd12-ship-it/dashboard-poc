// Get elements
const addWidgetBtn = document.getElementById("addWidgetBtn");
const dashboard = document.getElementById("dashboard");

let widgetCount = 1;

/* =========================
   ADD CHART WIDGET
========================= */
addWidgetBtn.addEventListener("click", () => {
  const widget = document.createElement("div");
  widget.className = "widget";

  widget.innerHTML = `
    <h3>Sales Chart</h3>
    <canvas id="chart${widgetCount}"></canvas>
    <button class="removeBtn">Remove</button>
  `;

  dashboard.appendChild(widget);

  // Create chart
  const ctx = document.getElementById(`chart${widgetCount}`);
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      datasets: [{
        label: "Sales",
        data: [10, 20, 15, 30],
        backgroundColor: "#38bdf8"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  widgetCount++;

  // Remove widget
  widget.querySelector(".removeBtn").addEventListener("click", () => {
    widget.remove();
  });
});

/* =========================
   ADD KPI WIDGET
========================= */
function addKPI() {
  const widget = document.createElement("div");
  widget.className = "widget kpi";

  widget.innerHTML = `
    <h4>Total Orders</h4>
    <h2>125</h2>
    <button class="removeBtn">Remove</button>
  `;

  dashboard.appendChild(widget);

  // Remove KPI
  widget.querySelector(".removeBtn").addEventListener("click", () => {
    widget.remove();
  });
}
