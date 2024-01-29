const myDiv = document.querySelectorAll('.ask');

myDiv.forEach(item => {
  let icon = item.querySelector(".icon");
  let ans = item.querySelector(".answer")
  item.addEventListener('click', () => {
    icon.classList.toggle('active');
    ans.classList.toggle('active');
  })
})