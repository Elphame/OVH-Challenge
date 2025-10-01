import { expect } from "@playwright/test";
import { When, Then } from "../../support/fixtures";


When('the page loads', async function () {
  // Use page.evaluate to run code in the browser and get performance timings
    this.performanceMetrics = await this.page.evaluate(() => {
        const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        return {
        ttfb: navTiming.responseStart - navTiming.requestStart,
        DOMContentLoaded: navTiming.loadEventEnd - navTiming.fetchStart,
        };
    });
    console.log('Performance Metrics:', this.performanceMetrics);
});

Then('the Time to First Byte should be less than {int} milliseconds', function (ms: number) {
    expect(this.performanceMetrics.ttfb).toBeLessThan(ms);
});

Then('the total page load time should be less than {int} milliseconds', function (ms: number) {
    expect(this.performanceMetrics.DOMContentLoaded).toBeLessThan(ms);
});