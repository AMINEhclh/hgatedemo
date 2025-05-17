"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export default function InvestmentChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Investment data (in millions)
    const years = ["2019", "2020", "2021", "2022", "2023"]
    const investmentData = [120, 150, 180, 210, 250]
    const profitData = [15, 22, 35, 42, 55]
    const marketAverageData = [10, 12, 18, 22, 28]

    // Calculate ROI percentage
    const roiData = profitData.map((profit, index) => ((profit / investmentData[index]) * 100).toFixed(1))

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: years,
        datasets: [
          {
            label: "Total Investment (millions $)",
            data: investmentData,
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            borderColor: "rgba(16, 185, 129, 0.8)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: "rgba(16, 185, 129, 1)",
          },
          {
            label: "Profit (millions $)",
            data: profitData,
            backgroundColor: "rgba(5, 150, 105, 0.1)",
            borderColor: "rgba(5, 150, 105, 0.8)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: "rgba(5, 150, 105, 1)",
          },
          {
            label: "Market Average Return (%)",
            data: marketAverageData,
            backgroundColor: "rgba(209, 213, 219, 0.2)",
            borderColor: "rgba(156, 163, 175, 0.8)",
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: "rgba(156, 163, 175, 1)",
            yAxisID: "y1",
          },
          {
            label: "Our ROI (%)",
            data: roiData,
            backgroundColor: "rgba(16, 185, 129, 0.2)",
            borderColor: "rgba(4, 120, 87, 0.8)",
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: "rgba(4, 120, 87, 1)",
            yAxisID: "y1",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          tooltip: {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            titleColor: "#111827",
            bodyColor: "#374151",
            borderColor: "rgba(16, 185, 129, 0.2)",
            borderWidth: 1,
            padding: 12,
            boxPadding: 6,
            usePointStyle: true,
            callbacks: {
              label: (context) => {
                let label = context.dataset.label || ""
                if (label) {
                  label += ": "
                }
                if (context.parsed.y !== null) {
                  if (context.datasetIndex === 2 || context.datasetIndex === 3) {
                    label += context.parsed.y + "%"
                  } else {
                    label += "$" + context.parsed.y + "M"
                  }
                }
                return label
              },
            },
          },
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
              padding: 20,
              font: {
                size: 12,
              },
            },
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
              },
            },
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Amount (millions $)",
              font: {
                size: 12,
                weight: "bold",
              },
            },
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
            ticks: {
              callback: (value) => "$" + value + "M",
              font: {
                size: 12,
              },
            },
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            title: {
              display: true,
              text: "Return (%)",
              font: {
                size: 12,
                weight: "bold",
              },
            },
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              callback: (value) => value + "%",
              font: {
                size: 12,
              },
            },
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: "easeInOutQuad",
            from: 0.2,
            to: 0.4,
          },
          y: {
            duration: 2000,
            delay: 500,
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}
