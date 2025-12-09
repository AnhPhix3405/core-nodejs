async function loadModule(moduleName) {
    try{
        const module = await import(`./${moduleName}.js`);
        return module;
    }
    catch(e){
        console.log(e)
    }
}

// const moduleName = 'app';
// loadModule(moduleName).then(module => {
//     module.default();
// })


// (async () => {
//     const appModule = await loadModule('app');
//     // appModule.default();
//     console.log(appModule.data)
// }) ();

import { upperCase } from "upper-case";

console.log(upperCase("hello world!"));

