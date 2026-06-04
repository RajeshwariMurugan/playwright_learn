import{test,expect}from "@playwright/test";


test("test automation", async ({ page }) => {
    console.log("Welcome");
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("link",{name:'PlaywrightPractice'}).click();
    console.log(await page.title()); 

   await page.getByRole("button",{name:'Primary Action'}).click();
await page.getByRole("checkbox",{name:"Accept terms"}).click();
})
