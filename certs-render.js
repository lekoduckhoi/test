// course example
let courses = [
  {
    coursename: "Course example",
    id: "123456789",
    issued: "leko",
    address: "abcxyzdefmno",
    info: "this is an example of a course",
    img: "./image/logo.jpg"
  },
  {
    coursename: "Course example 2",
    id: "987654321",
    issued: "leko",
    address: "xyzabcdefghi",
    info: "this is another example of a course",
    img: "./image/logo.jpg"
  },
  {
    coursename: "BLOCKCHAIN MATHEMATICS AND COMPUTING",
    id: "123456789",
    issued: "leko",
    address: "abcxyzdefmno",
    info: "this is another example of a course",
    img: "./image/logo.jpg"
  },
  {
    coursename: "Course example 4",
    id: "987654321",
    issued: "leko",
    address: "khawijdsandkac",
    info: "this is another example of a course",
    img: "./image/logo.jpg"
  }
]

function add(n){
  for(var i=1;i<=n;i++){
  const course = document.createElement('div')
  course.classList.add('course')
  course.innerHTML =
  `<div class="course__image">
    <img id="image${i}" src="${courses[i-1].img}" alt="course image preview">
  </div>
  <div class="courseinfo">
    <h2 id="name${i}" class="courseinfo__name">${courses[i-1].coursename}</h2>
    <p id="id${i}" class="courseinfo__id">ID: ${courses[i-1].id}</p>
    <p id="issued${i}" class="courseinfo__issued">Issued by: ${courses[i-1].issued}</p>
    <p id="address${i}" class="courseinfo__address">Address: ${courses[i-1].address}</p>
    <p id="info${i}" class="courseinfo__info">Info: ${courses[i-1].info}</p>
  </div>
  <div class="course__button">
    <button class="gotocert">Find</button>
  </div>`
  $("#courses").append(course)
}}
//example add(n)
add(3)
//
const certbtn = document.querySelectorAll('.gotocert')
certbtn.forEach(el =>{
  el.addEventListener('click',function(){
    $('.certblock').css('left','-50%')
    var i = Array.prototype.indexOf.call(certbtn,el)
    $('.course__find__image__src').attr('src',courses[i].img)
    $('.courseinfo__find__name').text(courses[i].coursename)
    $('.courseinfo__find__id').text('Id: ' + courses[i].id) 
    $('.courseinfo__find__issued').text('Issued by: ' + courses[i].issued)
    $('.courseinfo__find__address').text('Address: ' + courses[i].address)
    $('.courseinfo__find__info').text('Info: ' + courses[i].info)
  })
})
document.querySelector('.backtocourse').addEventListener('click',function(){
  $('.certblock').css('left','50%')
})
