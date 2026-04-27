// preload
["assets/product1.png","assets/product2.png","assets/product3.png","assets/feature.png"]
.forEach(src=>{const i=new Image();i.src=src;});

document.querySelectorAll('.tab').forEach(btn=>{
btn.onclick=()=>{
document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
document.getElementById('mainImg').src='assets/'+btn.dataset.data;
}
});
