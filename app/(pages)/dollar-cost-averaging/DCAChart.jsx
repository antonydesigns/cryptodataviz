"use client";

import ReactApexChart from "react-apexcharts";
import { DCAStore } from "./DCAStore";

export default function Chart() {
  const state = {
    data: DCAStore((store) => store.finalData),
    loaded: DCAStore((store) => store.finalDataLoaded),
    asset: DCAStore((store) => store.assetSelected),
    selected: [],
  };

  const display = [
    {
      name: "Price (USD)",
      data: state.data.map((row) => row.price),
      type: "line",
    },
    {
      name: "Avg. Buy Price (USD)",
      data: state.data.map((row) => row.abp),
      type: "line",
    },
    {
      name: "Unrealized Profit (USD)",
      data: state.data.map((row) => row.profit),
      type: "area",
    },
    {
      name: "Portolio Value",
      data: state.data.map((row) => row.investment_value),
      type: "area",
    },
  ];

  const chartData = {
    options: {
      chart: {
        //
        zoom: {
          autoScaleYaxis: false,
        },
      },
      yaxis: [
        {
          tickAmount: 15, // Set the number of ticks/intervals you want
          title: {
            text: `${state.asset} price in USD`,
            style: {
              colors: [],
              fontSize: "18px",
              fontFamily: "Segoe UI",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
          },

          labels: {
            formatter: (value) => {
              return value?.toFixed(2);
            },
          },
        },
        {
          tickAmount: 15, // Set the number of ticks/intervals you want
          title: {
            text: "Unrealized profit in USD",
            style: {
              colors: [],
              fontSize: "18px",
              fontFamily: "Segoe UI",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            formatter: (value) => {
              return value?.toFixed(2);
            },
          },
          opposite: true,
        },
      ],
      //
      xaxis: {
        type: "datetime",
        categories: state.data.map((row) => {
          return new Date(row.date).getTime();
        }),
      },
      tooltip: {
        x: {
          show: false,
          format: "dd MMM yyyy",
        },
      },
    },
    series: state.selected,
  };

  // FUNCTIONS

  // Component initializing

  (function () {
    select();
  })();

  // Selection logic

  function select() {
    state.selected.push(display[0]);
    state.selected.push(display[2]);
    /* 
      state.selected.push(display[1]);
      state.selected.push(display[3]);
       */
  }

  return (
    <div className="flex justify-center items-center mb-10">
      <div className="w-[80vw] h-[80vh]">
        {!state.loaded && (
          <p className="w-[80vw] h-[80vh] flex items-center justify-center ">
            Loading...
          </p>
        )}
        {state.loaded && (
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
}
