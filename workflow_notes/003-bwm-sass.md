1. Install the ff:
    ###### code
      ` npm install --save node-sass-chokidar@1.2.2 npm-run-all@4.1.2 `
2. Modify and add the ff code in package.json
    ###### code
      ├─ ` "build-css": "node-sass-chokidar" ./src -o ./src" `
      ├─ ` "watch-css": "npm run build-css && node-sass-chokidar ./src -o ./src --watch --recursive" `
      ├─ ` "start": "npm-run-all -p watch-css start-js" `
      ├─ ` "build-js:" "react-scripts build" `
      └─ ` "build:" "npm-run-all build-css build-js" `  

###### node-sass-chokidar
• Used to build sass/scss to css and watch sass/scss files
  use case:                       
    ` "build-css": "node-sass-chokidar" ./src -o ./src" `
                                          │   │   └─ output folder
                                          │   └─ output flag
                                          └─ input folder
    ` "watch-css": "npm run build-css && node-sass-chokidar ./src -o ./src --watch --recursive" ` 
                              │                └─ use package to →         watch all scss file changes                       
                              └─ compile scss to css

###### npm-run-all
• Used to run all scripts
  ` -p flag ` : parallel