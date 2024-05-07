import Chart from "chart.js/auto";

// Define the custom plugin
export const fillBetweenLinesPlugin = {
  id: "fillBetweenLines", // Unique identifier for the plugin
  afterDatasetsDraw: function (
    chart: {
      ctx: any;
      scales: { [x: string]: any };
      data: { datasets: any };
    },
    _: any
  ) {
    const ctx = chart.ctx;
    const xAxis = chart.scales["x"];
    const yAxis = chart.scales["y"];
    const datasets = chart.data.datasets;

    // Find the SD2 and SD2neg datasets
    const sd2Dataset = datasets.find(
      (dataset: { label: string }) => dataset.label === "SD2"
    );
    const sd2NegDataset = datasets.find(
      (dataset: { label: string }) => dataset.label === "SD2neg"
    );

    if (!sd2Dataset || !sd2NegDataset) {
      return;
    }

    const sd2Data = sd2Dataset.data;
    const sd2NegData = sd2NegDataset.data;

    // Begin the fill area
    ctx.save();
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)"; // green color with 50% opacity
    ctx.beginPath();
    ctx.moveTo(xAxis.left, yAxis.getPixelForValue(sd2Data[0])); // Start from the left edge

    // Draw the fill area between SD2 and SD2neg lines
    for (let i = 0; i < sd2Data.length; i++) {
      const x = xAxis.getPixelForValue(i);
      const y1 = yAxis.getPixelForValue(sd2Data[i]);
      const y2 = yAxis.getPixelForValue(sd2NegData[i]);
      ctx.lineTo(x, y1); // Draw to the SD2 line
    }

    // Draw back down to the SD2neg line
    for (let i = sd2Data.length - 1; i >= 0; i--) {
      const x = xAxis.getPixelForValue(i);
      const y2 = yAxis.getPixelForValue(sd2NegData[i]);
      ctx.lineTo(x, y2); // Draw back down to the SD2neg line
    }

    // Close the fill area
    ctx.closePath();
    ctx.fill();
    ctx.restore(); // Restore the context
  },
};

// Register the plugin with your Chart.js instance
Chart.register(fillBetweenLinesPlugin);
