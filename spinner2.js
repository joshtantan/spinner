const spinnerChars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let i = 0; i < spinnerChars.length; i++) {
  const delay = 100 + (i * 200);

  setTimeout(() => {
    process.stdout.write(spinnerChars[i]);
  }, delay);
}
