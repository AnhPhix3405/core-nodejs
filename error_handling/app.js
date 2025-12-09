//TODO 1. Standard JavaScript Errors
// JSON.parse('{invalid json}');

// null.a;

// unknownVar;  


//TODO 2. System Errors
// ENOENT: No such file or directory
// import fs from 'fs';

// no entry error
// fs.readFile('nonexistent.txt', (err) => {
//   console.error(err.code); // 'ENOENT'
// });

// import http from 'http';

// const req = http.request('http://noexist.com', (res) => {});
// req.on('error', (err)    =>{
//     console.error(err.code); // 'ENOTFOUND'
// })

/* 
 *Example: Error-First Callback
import fs from 'fs';
// if not return callback cause multiple calls
function readConfigFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      // Handle specific error types
      if (err.code === 'ENOENT') {
        callback(new Error(`Config file ${filename} not found`));
      } else if (err.code === 'EACCES') {
        return callback(new Error(`No permission to read ${filename}`));
      }
      // For all other errors
      return callback(err);
    }

    // Process data if no error
    try {
      const config = JSON.parse(data);
      callback(null, config);
    } catch (parseError) {
      callback(new Error(`Invalid JSON in ${filename}`));
    }
  });
}

// Usage
readConfigFile('../noexist', (err, config) => {
  if (err) {
    console.error("callback called :" +  err.message);
    // Handle the error (e.g., use default config)
    return;
  }
  console.log('Config loaded successfully:', config);
});
*/

/*
 *Example: try/catch with Async/Await
import fs from 'fs/promises';

async function loadUserData(userId) {
  try {
    const data = await fs.readFile(`users/${userId}.json`, 'utf8');
    const user = JSON.parse(data);

    if (!user.email) {
      throw new Error('Invalid user data: missing email');
    }

    return user;
  } catch (error) {
    // Handle different error types
    if (error.code === 'ENOENT') {
      throw new Error(`User ${userId} not found`);
    } else if (error instanceof SyntaxError) {
      throw new Error('Invalid user data format');
    }
    // Re-throw other errors
    throw error;
  } finally {
    // Cleanup code that runs whether successful or not
    console.log(`Finished processing user ${userId}`);
  }
}

// Usage
(async () => {
  try {
    const user = await loadUserData(123);
    console.log('User loaded:', user);
  } catch (error) {
    console.error('Failed to load user:', error.message);
    // Handle error (e.g., show to user, retry, etc.)
  }
})();
*/

/* 
*Modern handling test flow
async function test() {
  try {
    console.log('1. Bắt đầu');
    throw new Error('Lỗi ở try');
    console.log('2. Dòng này KHÔNG BAO GIỜ chạy');
  } catch (err) {
    console.log('3. Vào catch');
    // throw err;  // re-throw
    throw new Error('throw từ catch ' + err.message);
  } finally {
    console.log('4. finally luôn chạy – dù có throw ở try hay catch!');
  }
}

test().catch(err => console.log('5. Lỗi bay ra đây:', err.message));
*/

/* 
*test add 2 callback to a async function
function callback1(cnt){
    console.log("fun1 is called with cnt = " + cnt)
}
function callback2(){
    console.log("fun2 is called")
}
//*callback phải tự chạy, fs là do nodejs chạy thay
function test(cb1){
    let cnt = 0;
    cnt ++;
    cb1(cnt);
}   

test(callback1);
*/

// *Example: Global Error Handlers
import http, { get } from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello');
});

// server.listen(3000, () => {
//   console.log('Server running');
// });

// *Handle uncaught exceptions (synchronous errors)
process.on('uncaughtException', (error) => {
  console.error('UNCAUGHT EXCEPTION! Shutting down...');
  console.error(error.name, error.message);

  // Perform cleanup (close database connections, etc.)
  server.close(() => {
    console.log('Process terminated due to uncaught exception');
    process.exit(1); // Exit with failure
  });
});

// *Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION! Shutting down...');
  console.error('Unhandled Rejection at:', promise, 'Reason:', reason);

  // Close server and exit
  server.close(() => {
    process.exit(1);
  });
});

// *Example of an unhandled promise rejection
// Promise.reject(new Error('Something went wrong'));

//* Example of an uncaught exception
// setTimeout(() => {
//   throw new Error('Uncaught exception after timeout');
// }, 1000);


import { NotFoundError, ValidationError } from './errors/index.js';

function getUser(id) {
  if(!id){
    throw new ValidationError('User ID is required', 'id');
  }
  else{
    throw new NotFoundError(`User with ID ${id} not found`);
  }
}

// getUser();
getUser(123);