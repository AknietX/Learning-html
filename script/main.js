// Theme
const html = document.querySelector("html");
const selectBG = document.querySelector("#theme")
function setBG(){
  const value = selectBG.value
  switch(value){
    case "wht":
      html.style.backgroundColor = "white"
      html.style.color = "black"
    break;
    default:
      html.style.backgroundColor = "black"
      html.style.color = "white"
  }
}
selectBG.addEventListener("change", setBG)






const btnVid = document.querySelector(".BtnVid");
const boxDiv = document.querySelector(".hidden");
const video = document.querySelector("video");

 btnVid.addEventListener("click", () => boxDiv.classList.remove("hidden"));

video.addEventListener("click", event => {
    event.stopPropagation();
    if(video.paused){
      video.play();
    }else{
     video.pause();
   };
});

 boxDiv.addEventListener("click", () => boxDiv.classList.add("hidden"));

video.addEventListener("mouseover", () => {
  hoverTimer = setTimeout(() => {
    video.style.opacity = "1"; // Убираем затемнение
    video.classList.add("no-hover-effect"); // Добавляем класс, чтобы убрать hover эффект
  }, 250); // Запуск через 1 секунду
});

// Обработчик для выхода с видео
video.addEventListener("mouseleave", () => {
  clearTimeout(hoverTimer); // Сброс таймера
  video.style.opacity = ""; // Возвращаем стиль по умолчанию
  video.classList.remove("no-hover-effect"); // Убираем класс
});


// video
const videoBox = ["videoplayback.mp4", ]
const videoAlts = ["slivkiShow",]
const vidJS = document.querySelector(".jsVideo")
for(const i = 0; i < videoBox.length; i++){
  const p = document.createElement("p");
  const vid = document.createElement("video");

  vid.setAttribute("src", `video/${videoBox[i]}`);
  vid.setAttribute("controls", "")
  p.textContent = videoAlts[i];
  vid.appendChild(p)
  vidJS.appendChild(vid)
  vid.addEventListener("mouseover", ()=>{
    html.style.backgroundColor = 'black';
  })
  vid.addEventListener("mouseleave", ()=>{
    setTimeout(()=>{
      html.style.backgroundColor = "white";
    }, 500);
    
  })

}


