# Dermstore Front-End Challenge

Thanks for your consideration! This project was built using React and styled with [Tailwind CSS](https://tailwindcss.com/).

**Note:** no consideration was taken for mobile devices

## Install

- Clone the repo
- Install dependencies (`npm install`)
- To view run `npm run start` or go to https://dermstore-frontend-challenge.netlify.com/

#### Issues

The task required pulling from an internal API (`https://www.dermstore.com/ajax/challenge.php`), but the data being returned is flagged: `405 Method Not Allowed`. Possible solutions?: https://airbrake.io/blog/http-errors/405-method-not-allowed

Here is what is being returned when I try to access in Postman:

> Something about your browser made us think you were a bot. There are a few reasons this might happen:
>
> - You're a power user moving through this website with super-human speed.
> - You've disabled JavaScript in your web browser.
> - A third-party browser plugin, such as Ghostery or NoScript, is preventing JavaScript from running. Additional information is available in this support article.

> After completing the CAPTCHA below, you will immediately regain access.

To move this forward, I created mock data in the `data.json` file.

![image](https://user-images.githubusercontent.com/7773718/63897720-0b702400-c9ab-11e9-869e-a570cfa630b0.png)
