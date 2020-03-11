# Repro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# The bug repro

I've got 2 components : 
`my-card` and `my-button`

The `my-card` component uses the `my-button` component.

When used in an Angular App there is no problem it works as it should be : 
![As Angular app](https://nsa40.casimages.com/img/2020/03/11/200311021650661140.png)

But when used as an Angular Element the `my-button` component display 2 button instead of 1
![As Angular Element](https://nsa40.casimages.com/img/2020/03/11/200311021650593631.png)

Info about this repro :
- There is a repro as Angular Element in the `test` folder
- You can re-generate the `elements.js` file by replace the `app.module.ts` by `module_angular_elements` then remove `app.components.ts` and run `npm run build:elements`. The generated file will be put in the `test` folder.
