console.log('Welcome to Holberton School, what is your name?' + '\n' )

process.stdin.on('readable', () => {
    const name = process.stdin.read()
    if (name !== null) {
        process.stdout.write('Your name is: ' + name)
        console.log('This important software is now closing' + '\n')
        }
    });