import{test,expect}from "@playwright/test";

// test("find locators", async ({ page }) => {
//     console.log("Welcome");
//     await page.goto("https:www.google.com");
//    await page.getByRole("link",{name:'Gmail'}).click();
// console.log(await page.title()); // Page title
// console.log(page.url());         // Current URL     
// })


test("inputs", async ({ page }) => {
    console.log("FB");
    await page.goto("https:www.facebook.com");
   await page.getByLabel('Email address or mobile number').fill("raji@gmail.com");
   await page.getByLabel('Password').fill("admin@124");

   await page.goto("https://testautomationpractice.blogspot.com/");
   const searchbox=page.getByPlaceholder("Enter Name");
   await searchbox.fill("playwright");
    const emailbox=page.getByPlaceholder("Enter EMail");
   await emailbox.fill("playwright@gmail.com");

    
})





