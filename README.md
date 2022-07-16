#  Landing Page Project.

### Project description:
Image processing api, where an img is resized according to url parameters.

### Usage:
 Simply add the img name as well as the required width/height
 The endpoint is set as: /img/imgname/width-height with port 3000
 An example: http://localhost:3000/img/fjord/500-333

### scripts:
"build" : builds all ts files into build folder.\
"start" : runs the server.ts file with nodemon, after which the app is ready to use\
"test" : builds the ts then runs jasmine\
"pretty": applies prettier on all src files, --write included\
"eslint": checks all src files with eslint\
"pr-es": runs "pretty" followed by "eslint"\
"runAll" runs prettier, eslint, tsc, jasmine, nodemon ./server.ts, at the same order\

#### Author: Ahmed Hassan Abozed.

