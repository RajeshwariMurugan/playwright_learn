import{test,expect}from "@playwright/test";

test("find locators", async ({ page }) => {
    console.log("Welcome");
    await page.goto("https:www.google.com");
   await page.getByRole("link",{name:'Gmail'}).click();
console.log(await page.title()); // Page title
console.log(page.url());         // Current URL     
})

