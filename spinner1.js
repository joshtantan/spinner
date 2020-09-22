let maxDelay = 1000;

for (let delay = 100; delay <= maxDelay; delay += 1000) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, delay);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, delay + 200);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, delay + 400);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, delay + 600);

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, delay + 800);
}

