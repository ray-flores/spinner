let arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ','\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let start = 0;
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, (start += 200));
}



