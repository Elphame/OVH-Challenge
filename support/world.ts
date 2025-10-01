import { Page } from "@playwright/test";

export class World {
    constructor(
        public page: Page,
        public performanceMetrics: { ttfb: number, DOMContentLoaded: number }
    ) { }
}