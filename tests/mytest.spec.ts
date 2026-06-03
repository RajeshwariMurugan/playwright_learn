import{test,expect}from "@playwright/test";

test("open website",async({page})=>{
    await page.goto("https://www.facebook.com");
     let title:string=await page.title();
    console.log("title: ",title);
    await expect(page).toHaveTitle("Facebook");
})

test("open website",async({page})=>{
    await page.goto("https://www.google.com");
     let title:string=await page.title();
    console.log("title: ",title);
    await expect(page).toHaveTitle("Google");
})