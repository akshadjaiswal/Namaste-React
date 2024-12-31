# Namaste React
# Chapter 10 - Jo Dikhta hai Wahi Bikhta hai


## Q: Explore all the ways of writing `CSS`.

A: CSS can be added in HTML document in three ways:
1. Inline CSS -
   - An inline CSS is used to apply a unique style to an HTML document. An inline CSS uses the style attribute of an HTML document. 

    Example :
    ```
    <h1 style="color:Blue;">A Blue Heading</h1>
    ```
2. Internal CSS -
    - A internal CSS is use to define a style for a single HTML page.An internal CSS is defined in the `<head>` section of an HTML page, within a `<style>` element.

    Example:
    
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Internal CSS Example</title>
        <style>
            h1 {
                color: blue;
                text-align: center;
                font-family: Arial, sans-serif;
            }
        </style>
    </head>
    <body>

        <h1>Welcome to Internal CSS Example</h1>

    </body>
    </html>
    ```
3.  External CSS
    - An external stylesheet is used to define the style for many HTML pages

    Example:
    ```
    <head>
    <link rel="stylesheet" href="style.css"/>
    </head>
    ```

## Q: How do we connfigure Tailwind CSS?

A: Step 1: Create a new project
   Step 2: Install Tailwind CSS
            