const spinner = [`\r|   `, `\r/   `, `\r-   `, `\r\\   `, `\r|   `, `\r/   `, `\r-   `, `\r\\   `, `\r|   \n`];
let i = 0;
const eventLoop = (input, callback) => {
  process.stdout.write(input);
  setTimeout(() => {
    if (i < spinner.length) {
      callback();
      i++;
    }
  }, 100);
};

const component = () => {
  eventLoop(spinner[i], component);
};
component();