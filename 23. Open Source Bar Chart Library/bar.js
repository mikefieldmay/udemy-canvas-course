/**
 * bar.js
 * simple, elegant bar chart library
 * 23/02/2022 - version 1.0
 * repo url
 * 
 * Copyright 2022 Mike Field-May
 * released under the MIT License
 * {license url}
 */

'use strict';

function BarChart(targetId, width, height, data )  {
    // Base
    var chart = this;
    // Specify Configurations
    chart.configureChart(targetId, width, height, data);

    // Pre Operations
    chart.performPreOperations();
}

BarChart.prototype.configureChart = function(targetId, width, height, data) {
    var chart = this;

    // Chart Specifications
    chart.setCanvasParameters(targetId, width, height, data)

   chart.setChartParameters();

};

BarChart.prototype.setCanvasParameters = function(targetId, width, height, data) {
    // Canvas specifications come from outside
    var chart = this;
    chart.id = targetId;
    chart.width = width;
    chart.height = height;
    chart.data = data;
};

BarChart.prototype.setChartParameters = function() {
    var chart = this;
    chart.axeRatio = 10; // in terms of percentage
    chart.verticalMargin = (chart.height * chart.axeRatio) / 100;
    chart.horizontalMargin = (chart.width * chart.axeRatio) / 100;
    chart.axeColor = "#b1b1b1";
    chart.axeWidth = 0.75;

    // Label Configurations
    chart.fontRatio = 3; // in terms of percentage
    chart.fontFamily = 'times';
    chart.fontStyle = 'normal';
    chart.fontWeight = '300';
    chart.fontColor = '#666';
    chart.verticalFontSize = (chart.height * chart.fontRatio) / 100;
    chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;

    // Guideline Configurations
    chart.guidelineColor = "#e5e5e5";
    chart.guidelineWidth = 0.5;
};

BarChart.prototype.performPreOperations = function () {
    var chart = this;
    // Create Canvas
    chart.createCanvas();
    chart.handleData();
    chart.prepareData();
};

BarChart.prototype.createCanvas = function() {
    // Base
    var chart = this;

    // Create Canvas
    var canvas  = document.createElement('canvas')
    canvas.id = chart.id + '-' + Math.random();
    canvas.width = chart.width;
    canvas.height = chart.height;
    // Append canvas to tarrget container
    document.getElementById("chart").innerHTML = ""; // clean container
    document.getElementById("chart").appendChild(canvas) // add canvas to clean container
    // Add chart to canvas
    chart.canvas = canvas
    chart.context = canvas.getContext("2d")
}

BarChart.prototype.handleData = function() {
    var chart = this;

    // Data Sets
    chart.labels = [];
    chart.values = [];

    chart.data.forEach(item => {
        chart.labels.push(item.label);
        chart.values.push(item.value);
    }) 
}

BarChart.prototype.prepareData = function () {
    var chart = this;

    // Global Variables
    chart.itemsNum = chart.data.length;
    chart.maxValue = Math.max.apply(null, chart.values);
    chart.minValue = Math.min.apply(null, chart.values);

    // Axe Specifications
    chart.verticalAxeWidth = chart.height - 2 * chart.verticalMargin;
    chart.horizontalAxeWidth = chart.width - 2 * chart.horizontalMargin;

    // Label specifications
    chart.verticalUpperBound = Math.ceil(chart.maxValue / 10) * 10;
    chart.labelFrequency = chart.verticalUpperBound / chart.itemsNum;
    chart.horizontalLabelFrequency = chart.horizontalAxeWidth / chart.itemsNum;
    console.log(chart)
}