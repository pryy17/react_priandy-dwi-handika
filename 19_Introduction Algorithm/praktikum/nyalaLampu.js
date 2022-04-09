let lampu = (n) => {
  let divisorCount = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      divisorCount++;
    }
  }

  if (divisorCount % 2 == 0) {
    console.log("lampu mati");
  } else {
    console.log("lampu menyala");
  }
};

lampu(5);
lampu(4);