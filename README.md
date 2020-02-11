# Upload Library

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Error Code Information

Your Backend can output Error Codes depending on the uploaded File.
The current implemented Error Codes in the Library are the following:
```sh
0 = Upload Complete

1 = Fileformat incorrect!

2 = Filetype invalid!

3 = File could not be processed!

default = Unknown Error!
```
Your backend can output these values depending on the Error you wish to ouput on Screen and in the console.

## Imports needed

To use the Library you need to make the following imports: (Based on upload-0.0.1.tgz)

In app.module.ts(depends on where you need the component):

`import { UploadModule } from 'upload'; (Add to imports)`

`import { UploadService } from 'upload'; (Add to providers)`

## Library Usage

The component is using the following html tag:

`<UploadComponent backendURL="YourBackendUrl" filesizelimit=5242880 acceptfiletype=".xml">`

USE ALL INPUTS! Otherwise the component will not work!

- backendURL: Post your backend Url here

- filesizelimit: Number of bytes accepted

- acceptfiletype: Limitation in select file window

For no limitation in the acceptfiletype leave it as an empty string.

## Styling

To style the Upload component use the following classes in your global styles.scss file:

- `.btn (for the button styles)`

- `.margin-left (margin for all the buttons except the first one)`

- `.progress (to style the progress bar)`

- `.checkbox (to style the checkboxes)`

- `.snackbar (to align and style the snackbar)`

Example:
 ```sh
 .snackbar{
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #333; /* Black background color */
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 10px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 50%; /* Center the snackbar */
    bottom: 30px; /* 30px from the bottom */
}
```
"# angular-multi-file-upload-with-progressbar" 
